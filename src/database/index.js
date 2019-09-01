"use strict";

import { openDB } from "idb";
import seedData from "./seed.js";

const dbName = "HealthStack";
const dbVersion = 1;

const dbPromise = openDB(dbName, dbVersion, {
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
    return (await dbPromise).getAll("Patients");
  } catch (err) {
    console.error(err);
  }
}

export async function getPatientById(patientId) {
  try {
    return (await dbPromise).get("Patients", patientId);
  } catch (err) {
    console.error(err);
  }
}

export async function createPatient(patient) {
  try {
    return (await dbPromise).add("Patients", patient);
  } catch (err) {
    console.error(err);
  }
}

export async function editPatientById(patientId, patient) {
  try {
    return (await dbPromise).put("Patients", patient, patientId);
  } catch (err) {
    console.error(err);
  }
}

export async function deletePatientById(patientId) {
  try {
    return (await dbPromise).delete("Patients", patientId);
  } catch (err) {
    console.error(err);
  }
}

/**
 * Exams Functions
 */

export async function getAllExams() {
  try {
    return (await dbPromise).getAll("Exams");
  } catch (err) {
    console.error(err);
  }
}

export async function getExamById(examId) {
  try {
    return (await dbPromise).get("Exams", examId);
  } catch (err) {
    console.error(err);
  }
}

export async function createExam(exam) {
  try {
    return (await dbPromise).add("Exams", exam);
  } catch (err) {
    console.error(err);
  }
}

export async function editExamById(examId, exam) {
  try {
    return (await dbPromise).put("Exams", exam, examId);
  } catch (err) {
    console.error(err);
  }
}

export async function deleteExamById(examId) {
  try {
    return (await dbPromise).delete("Exams", examId);
  } catch (err) {
    console.error(err);
  }
}

/**
 * ExamRequest Functions
 */

export async function getAllExamRequests() {
  try {
    return (await dbPromise).getAll("ExamRequests");
  } catch (err) {
    console.error(err);
  }
}

export async function getExamRequestById(examRequestId) {
  try {
    return (await dbPromise).get("ExamRequests", examRequestId);
  } catch (err) {
    console.error(err);
  }
}

export async function getPatientExamRequestById(patientId) {
  try {
    return (await dbPromise).getFromIndex(
      "ExamRequests",
      "patientId",
      patientId
    );
  } catch (err) {
    console.error(err);
  }
}

/**
 * message to Vlad
 * Returns the original examRequest object in seed.js -> check seed.js line: 142
 */
export async function getCompleteExamReqeuestById(examRequestId) {
  try {
    let examRequest = (await dbPromise).get("ExamRequests", examRequestId);
    examRequest.patient = await await getPatientById(
      (await examRequest).patientId
    );
    examRequest.exams = examRequest.exams.map(async exam => {
      let fetchedExam = await await getExamById(exam.examId);
      fetchedExam.status = exam.status;
      return fetchedExam;
    });
    return examRequest;
  } catch (err) {
    console.error(err);
  }
}

export async function createExamRequest(examRequest) {
  try {
    return (await dbPromise).add("ExamRequests", examRequest);
  } catch (err) {
    console.error(err);
  }
}

export async function editExamRequestById(examRequestId, examRequest) {
  try {
    return (await dbPromise).put("ExamRequests", examRequest, examRequestId);
  } catch (err) {
    console.error(err);
  }
}

export async function deleteExamRequestById(examRequestId) {
  try {
    return (await dbPromise).delete("ExamRequests", examRequestId);
  } catch (err) {
    console.error(err);
  }
}

/**
 * Users Functions
 */

export async function getAllUsers() {
  try {
    return (await dbPromise).getAll("Users");
  } catch (err) {
    console.error(err);
  }
}

export async function getUserById(userId) {
  try {
    return (await dbPromise).get("Users", userId);
  } catch (err) {
    console.error(err);
  }
}

export async function createUser(user) {
  try {
    return (await dbPromise).add("Users", user);
  } catch (err) {
    console.error(err);
  }
}

export async function editUserById(userId, user) {
  try {
    return (await dbPromise).put("Users", user, userId);
  } catch (err) {
    console.error(err);
  }
}

export async function deleteUserById(userId) {
  try {
    return (await dbPromise).delete("Users", userId);
  } catch (err) {
    console.error(err);
  }
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
