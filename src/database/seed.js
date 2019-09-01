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
const examRequests = [
  {
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

const exams = [
  {
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

const patients = [
  {
    firstName: "vladimir",
    lastName: "fomene",
    sex: "m",
    age: "26",
    telephone: "+237690346872",
    email: "vladimirfomene@gmail.com"
  },
  {
    firstName: "brandon",
    lastName: "odiwuor",
    sex: "m",
    age: "24",
    telephone: "+254798962559",
    email: "brandon.odiwuor@gmail.com"
  }
];
export default {
  patients,
  exams,
  examRequests,
  users
};
