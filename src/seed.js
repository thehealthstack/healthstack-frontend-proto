window.Seed = (function() {
  const users = [
    {
      firstName: "toto",
      lastName: "technicien",
      telephone: "+237690346872",
      email: "toto.pasteur@pasteur-yaounde.org",
      role: "lab technician",
      department: "hematology",
      laboratory: {
        name: "Centre Pasteur Cameroon",
        tel: "",
        email: ""
      },
      password: "password"
    },
    {
      firstName: "toto",
      lastName: "cashier",
      telephone: "+237690346872",
      email: "toto.cashier@pasteur-yaounde.org",
      role: "cashier",
      department: "finance",
      laboratory: {
        name: "Centre Pasteur Cameroon",
        tel: "",
        email: ""
      },
      password: "password"
    },
    {
      firstName: "toto",
      lastName: "receptionist",
      telephone: "+237690346872",
      email: "toto.receptionist@pasteur-yaounde.org",
      role: "cashier",
      department: "reception",
      laboratory: {
        name: "Centre Pasteur Cameroon",
        tel: "",
        email: ""
      },
      password: "password"
    },
    {
      firstName: "toto",
      lastName: "biologist",
      telephone: "+237690346872",
      email: "toto.biologist@pasteur-yaounde.org",
      role: "biologist",
      department: "validation",
      laboratory: {
        name: "Centre Pasteur Cameroon",
        tel: "",
        email: ""
      },
      password: "password"
    }
  ];
  const examRequests1 = [
    {
      examRequestId: 1,
      patientId: 1,
      doctor: {
        name: "simo mope",
        email: "simomope@gmail.com",
        telephone: "+237674447555"
      },
      exams: [
        {
          examId: 1,
          status: "specimen collected"
        },
        {
          examId: 2,
          status: "specimen collected"
        }
      ],
      status: "verified"
    },
    {
      examRequestId: 2,
      patientId: 2,
      doctor: {
        name: "ndum oliver",
        email: "oliverndum@gmail.com",
        telephone: "+23770244738"
      },
      exams: [
        {
          examId: 1,
          status: "specimen collected"
        }
      ],
      status: "specimen collected"
    }
  ];

  function addExamRequest(patientId, doctor, examsIdArray) {
    let exams = examsIdArray.map(examId => {
      return {
        examId: examId,
        status: "requested"
      };
    });
    let examRequestId = examRequests1.length + 1;
    let examRequest = {
      examRequestId: examRequestId,
      patientId: patientId,
      doctor: doctor,
      exams: exams,
      status: "requested"
    };
    examRequests1.push(examRequest);
  }

  function fetchExamRequest(examRequestId) {
    return examRequests1[examRequestId - 1];
  }

  function fetchPatientExamRequest(patientId) {
    let response = {};
    for (let i = 0; i < examRequests1.length; i++) {
      if (examRequests1[i].patientId === patientId) {
        response = examRequests1[i];
      }
    }
    return response;
  }

  function fetchCompleteExamRequestObject(examRequestId) {
    let examRequest = fetchExamRequest(examRequestId);
    examRequest.patient = fetchPatient(examRequest.patientId);
    examRequest.exams = examRequest.exams.map(exam => {
      fetchedExam = fetchExam(exam.examId);
      fetchedExam.status = exam.status;
      return fetchedExam;
    });
    return examRequest;
  }

  const examRequests = [
    {
      examRequestId: 1,
      patient: {
        patientId: 1,
        firstName: "vladimir",
        lastName: "fomene",
        sex: "m",
        age: "26",
        telephone: "+237690346872",
        email: "vladimirfomene@gmail.com"
      },
      doctor: {
        name: "simo mope",
        email: "simomope@gmail.com",
        telephone: "+237674447555"
      },
      exams: [
        {
          examId: 1,
          examName: "Numeration Formule Sanguine",
          aliases: ["NFS", "Hemogramme"],
          department: "hematology",
          parameters: [
            {
              name: "Neutrophilles",
              unit: "%",
              parameterFormula: ""
            },
            {
              name: "Monocytes",
              unit: "%",
              parameterFormula: ""
            },
            {
              name: "leucocytes",
              unit: "%",
              parameterFormula: ""
            }
          ],
          status: "specimen collected"
        },
        {
          examId: 2,
          examName: "Goutte Epaisse",
          aliases: ["GE"],
          department: "parasitology",
          parameters: [
            {
              name: "Positivite",
              unit: "",
              parameterFormula: ""
            }
          ],
          status: "specimen collected"
        }
      ],
      status: "verified"
    },
    {
      examRequestId: 2,
      patient: {
        patientId: 2,
        firstName: "brandon",
        lastName: "odiwuor",
        sex: "m",
        age: "24",
        telephone: "+254798962559",
        email: "brandon.odiwuor@gmail.com"
      },
      doctor: {
        name: "ndum oliver",
        email: "oliverndum@gmail.com",
        telephone: "+23770244738"
      },
      exams: [
        {
          examId: 1,
          examName: "Numeration Formule Sanguine",
          aliases: ["NFS", "Hemogramme"],
          department: "hematology",
          parameters: [
            {
              name: "Neutrophilles",
              unit: "%",
              parameterFormula: ""
            },
            {
              name: "Monocytes",
              unit: "%",
              parameterFormula: ""
            },
            {
              name: "leucocytes",
              unit: "%",
              parameterFormula: ""
            }
          ],
          status: "specimen collected"
        }
      ],
      status: "specimen collected"
    }
  ];

  const exams = [
    {
      examId: 1,
      examName: "Numeration Formule Sanguine",
      price: "4500",
      department: "hematology",
      aliases: [{ value: "NFS" }, { value: "Hemogramme" }],
      discounts: [
        {
          name: "Civil Servant",
          value: "10"
        },
        {
          name: "retired",
          value: "5"
        }
      ],
      parameters: [
        {
          name: "Neutrophilles",
          unit: "%",
          formula: ""
        },
        {
          name: "Monocytes",
          unit: "%",
          formula: ""
        },
        {
          name: "leucocytes",
          unit: "%",
          formula: ""
        }
      ]
    },
    {
      examId: 2,
      examName: "Goutte Epaisse",
      department: "parasitology",
      price: "3500",
      aliases: [{ value: "GE" }],
      discounts: [
        {
          name: "Civil Servant",
          value: "10"
        },
        {
          name: "retired",
          value: "5"
        }
      ],
      parameters: [
        {
          name: "Positivite",
          unit: "",
          formula: ""
        }
      ]
    }
  ];

  function getExams() {
    return exams.map(exam => {
      return { examName: exam.examName, examId: exam.examId };
    });
  }

  function fetchExam(examId) {
    return exams[examId - 1];
  }

  function getExam(examId) {
    return exams[examId - 1];
  }

  const vaccins = [
    {
      vaccinId: 1,
      vaccinName: "HIV",
      price: "10000",
      aliases: [{ value: "sida" }],
      discounts: [
        {
          name: "Civil Servant",
          value: "10"
        },
        {
          name: "retired",
          value: "5"
        }
      ]
    },
    {
      vaccinId: 2,
      vaccinName: "Fievre Jaune",
      price: "4500",
      aliases: [{ value: "yellow fever" }],
      discounts: [
        {
          name: "Civil Servant",
          value: "10"
        },
        {
          name: "retired",
          value: "5"
        }
      ]
    }
  ];

  const patients = [
    {
      patientId: 1,
      firstName: "vladimir",
      lastName: "fomene",
      sex: "m",
      age: "26",
      telephone: "+237690346872",
      email: "vladimirfomene@gmail.com"
    },
    {
      patientId: 2,
      firstName: "brandon",
      lastName: "odiwuor",
      sex: "m",
      age: "24",
      telephone: "+254798962559",
      email: "brandon.odiwuor@gmail.com"
    }
  ];

  function addPatient(patient) {
    patient.patientId = patients.length + 1;
    patients.push(patient);
  }

  function fetchPatient(patientId) {
    return patients[patientId - 1];
  }

  const session = {
    user: {
      firstName: "toto",
      lastName: "biologist",
      telephone: "+237690346872",
      email: "toto.biologist@pasteur-yaounde.org",
      role: "biologist",
      department: "validation",
      laboratory: {
        name: "Centre Pasteur Cameroon",
        tel: "",
        email: ""
      },
      password: "password"
    }
  };

  return {
    patients,
    exams,
    vaccins,
    examRequests,
    fetchExamRequest,
    fetchCompleteExamRequestObject,
    examRequests1,
    addExamRequest,
    users,
    session,
    addPatient,
    getExams,
    getExam,
    fetchPatient,
    fetchPatientExamRequest,
    fetchExam
  };
})();
