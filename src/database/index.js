'use strict';

import idb from 'idb';
import { async } from 'q';

const db = idb.openDB('healthstackDB', 1, {
    upgrade(db) {
        const patientStore = db.createObjectStore('Patients', {
            keypath: 'patientId',
            autoIncrement: true
        });
        patientStore.createIndex('email', 'email', {unique: true});

        const examStore = db.createObjectStore('Exams', {
            keyPath: 'examId', 
            autoIncrement: true
        });
        examStore.createIndex('examName', 'examName', {unique: true});

        const examRequestStore = db.createObjectStore('ExamRequests', {
            keyPath: 'examRequestId', 
            autoIncrement: true
        });
        examRequestStore.createIndex('patientId', 'patientId');

        const userStore = db.createObjectStore('Users', {
            keyPath: 'userId',
            autoIncrement: true
        });
        userStore.createIndex('email', 'email', {unique: true});
    }
});

/**
 * Patients Functions
 */
export async function getAllPatients() {
    try {
        return await db.getAll('Patients');
    }
    catch (e) {
        console.log("error")
    }
}

export async function getPatientById(patientId) {
    try {
        return await db.get('Patients', patientId);
    }
    catch (e) {
        console.log("error")
    }
}

export function createPatient(patient) {
    await db.add('Patients', patient);
}

export function editUserById(patientId, patient) {
    await db.put('Patients', patient, patientId);
}

export function deleteUserById(patientId) {
    await db.delete('Patients', patientId)
}

/**
 * Exams Functions
 */

export async function getAllExams() {
    try {
        return await db.getAll('Exams');
    }
    catch (e) {
        console.log("error")
    }
}

export async function getExamById(examId) {
    try {
        return await db.get('Exams', examId);
    }
    catch (e) {
        console.log("error")
    }
}

export function createExam(exam) {
    await db.add('Exams', exam);
}

export function editExamById(examId, exam) {
    await db.put('Exams', exam, examId);
}

export function deleteExamById(examId) {
    await db.delete('Exams', examId)
}

/**
 * ExamRequest Functions
 */

export async function getAllExamRequests() {
    try {
        return await db.getAll('ExamRequests');
    }
    catch (e) {
        console.log("error")
    }
}

export async function getExamRequestById(examRequestId) {
    try {
        return await db.get('ExamRequests', examRequestId);
    }
    catch (e) {
        console.log("error")
    }
}

export async function getPatientExamRequestById(patientId) {
    try {
        return await db.getFromIndex('ExamRequests', 'patientId', patientId);
    }
    catch (e) {
        console.log("error")
    }
}

/**
 * message to Vlad
 * Returns the original examRequest object in seed.js -> check seed.js line: 142
 */
export async function getCompleteExamReqeuestById(examRequestId) {
    try {
        let examRequest = await db.get('ExamRequests', examRequestId);
        examRequest.patient = await getPatientById(examRequest.patientId);
        examRequest.exams = examRequest.exams.map(exam => {
            let fetchedExam = await getExamById(exam.examId);
            fetchedExam.status = exam.status;
            return fetchedExam;
        });
        return examRequest;
    }
    catch (e) {
        console.log("error")
    }
}

export function createExamRequest(examRequest) {
    await db.add('ExamRequests', examRequest);
}

export function editExamRequestById(examRequestId, examRequest) {
    await db.put('ExamRequests', examRequest, examRequestId);
}

export function deleteExamRequestById(examRequestId) {
    await db.delete('ExamRequests', examRequestId)
}