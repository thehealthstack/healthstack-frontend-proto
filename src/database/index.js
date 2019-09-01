'use strict';

import idb from 'idb';

const db = idb.openDB('healthstackDB', 1, {
    upgrade(db) {
        const patientStrore = db.createObjectStore('Patients', {
            keypath: 'patientId',
            autoIncrement: true
        });
        patientStrore.createIndex('email', 'email', {unique: true});

        const examStore = db.createObjectStore('Exams', {
            keyPath: 'examId', 
            autoIncrement: true
        });
        examStore.createIndex('examName', 'examName', {unique: true});

        const examStore = db.createObjectStore('ExamRequests', {
            keyPath: 'examRequestId', 
            autoIncrement: true
        });
        examStore.createIndex('patientId', 'patientId');

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
    return await db.getAll('Patients');
}

export async function getPatientById(patientId) {
    return await db.get('Patients', patientId);
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
    return await db.getAll('Exams');
}

export async function getExamById(examId) {
    return await db.get('Exams', examId);
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
    return await db.getAll('ExamRequests');
}

export async function getExamRequestById(examRequestId) {
    return await db.get('ExamRequests', examRequestId);
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