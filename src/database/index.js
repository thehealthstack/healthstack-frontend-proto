"use strict";

import { openDB } from "idb";
import seedData from "./seed.js";

const db = openDB("healthstackDB", 1, {
  upgrade(db) {
    const patientStore = db.createObjectStore("Patients", {
      keypath: "patientId",
      autoIncrement: true
    });
    patientStore.createIndex("email", "email", { unique: true });

    const examStore = db.createObjectStore("Exams", {
      keyPath: "examId",
      autoIncrement: true
    });
    examStore.createIndex("examName", "examName", { unique: true });

    const examRequestStore = db.createObjectStore("ExamRequests", {
      keyPath: "examRequestId",
      autoIncrement: true
    });
    examRequestStore.createIndex("patientId", "patientId");

    const userStore = db.createObjectStore("Users", {
      keyPath: "userId",
      autoIncrement: true
    });
    userStore.createIndex("email", "email", { unique: true });
    seedDB()
      .then(() => console.log("Seed successful"))
      .catch(err => console.error(err));
  }
});

/**
 * Patients Functions
 */
export async function getAllPatients() {
  try {
    return await db.getAll("Patients");
  } catch (e) {
    console.log("error");
  }
}

export async function getPatientById(patientId) {
  try {
    return await db.get("Patients", patientId);
  } catch (e) {
    console.log("error");
  }
}

export async function createPatient(patient) {
  await db.add("Patients", patient);
}

export async function editPatientById(patientId, patient) {
  await db.put("Patients", patient, patientId);
}

export async function deletePatientById(patientId) {
  await db.delete("Patients", patientId);
}

/**
 * Exams Functions
 */

export async function getAllExams() {
  try {
    return await db.getAll("Exams");
  } catch (e) {
    console.log("error");
  }
}

export async function getExamById(examId) {
  try {
    return await db.get("Exams", examId);
  } catch (e) {
    console.log("error");
  }
}

export async function createExam(exam) {
  await db.add("Exams", exam);
}

export async function editExamById(examId, exam) {
  await db.put("Exams", exam, examId);
}

export async function deleteExamById(examId) {
  await db.delete("Exams", examId);
}

/**
 * ExamRequest Functions
 */

export async function getAllExamRequests() {
  try {
    return await db.getAll("ExamRequests");
  } catch (e) {
    console.log("error");
  }
}

export async function getExamRequestById(examRequestId) {
  try {
    return await db.get("ExamRequests", examRequestId);
  } catch (e) {
    console.log("error");
  }
}

export async function getPatientExamRequestById(patientId) {
  try {
    return await db.getFromIndex("ExamRequests", "patientId", patientId);
  } catch (e) {
    console.log("error");
  }
}

/**
 * message to Vlad
 * Returns the original examRequest object in seed.js -> check seed.js line: 142
 */
export async function getCompleteExamReqeuestById(examRequestId) {
  try {
    let examRequest = await db.get("ExamRequests", examRequestId);
    examRequest.patient = await getPatientById(examRequest.patientId);
    examRequest.exams = examRequest.exams.map(async exam => {
      let fetchedExam = await getExamById(exam.examId);
      fetchedExam.status = exam.status;
      return fetchedExam;
    });
    return examRequest;
  } catch (e) {
    console.log("error");
  }
}

export async function createExamRequest(examRequest) {
  await db.add("ExamRequests", examRequest);
}

export async function editExamRequestById(examRequestId, examRequest) {
  await db.put("ExamRequests", examRequest, examRequestId);
}

export async function deleteExamRequestById(examRequestId) {
  await db.delete("ExamRequests", examRequestId);
}

/**
 * Users Functions
 */

export async function getAllUsers() {
  try {
    return await db.getAll("Users");
  } catch (e) {
    console.log("error");
  }
}

export async function getUserById(userId) {
  try {
    return await db.get("Users", userId);
  } catch (e) {
    console.log("error");
  }
}

export async function createUser(user) {
  await db.add("Users", user);
}

export async function editUserById(userId, user) {
  await db.put("Users", user, userId);
}

export async function deleteUserById(userId) {
  await db.delete("Users", userId);
}

/**
 * Seed the database
 */

async function seedDB() {
  seedData.patients.forEach(await createPatient);
  seedData.examRequests.forEach(await createExamRequest);
  seedData.exams.forEach(await createExam);
  seedData.users.forEach(await createUser);
}
