export interface University {
  id: string;
  name: string;
  location: string;
  region: string;
  type: "Public" | "Private";
  yearEstablished: number;
  website: string;
  president: {
    name: string;
    photo?: string;
  };
  faculties: Faculty[];
  facilities: string[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  image?: string;
  logo?: string;
  description: string;
  statistics?: {
    // Haramaya format
    undergraduateStudents?: number;
    mastersStudents?: number;
    phdStudents?: number;
    undergraduatePrograms?: number;
    mastersPrograms?: number;
    phdPrograms?: number;
    // Gondar format
    staffs?: number;
    postgraduateStudents?: number;
    postgraduatePrograms?: number;
  };
}

export interface Faculty {
  name: string;
  departments: string[];
  programs: {
    bachelors: string[];
    masters: string[];
    phd: string[];
  };
}

export const universities: University[] = [
  {
    id: "aau",
    name: "Addis Ababa University",
    location: "Addis Ababa",
    region: "Addis Ababa",
    type: "Public",
    yearEstablished: 1950,
    website: "https://www.aau.edu.et",
    image: "/src/assets/image_University/AAU/AAU.jpg",
    logo: "/src/assets/image_University/AAU/logoaau.png",
    description: "The oldest and most prestigious university in Ethiopia, offering comprehensive programs across all fields of study.",
    president: {
      name: "Prof. Tassew Woldehanna",
    },
    faculties: [
      {
        name: "Faculty of Science",
        departments: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science"],
        programs: {
          bachelors: ["BSc in Physics", "BSc in Chemistry", "BSc in Biology", "BSc in Mathematics", "BSc in Computer Science"],
          masters: ["MSc in Physics", "MSc in Chemistry", "MSc in Biology"],
          phd: ["PhD in Physics", "PhD in Chemistry", "PhD in Biology"],
        },
      },
      {
        name: "Faculty of Medicine",
        departments: ["Internal Medicine", "Surgery", "Pediatrics", "Public Health"],
        programs: {
          bachelors: ["MD"],
          masters: ["MSc in Public Health", "MSc in Clinical Medicine"],
          phd: ["PhD in Medicine"],
        },
      },
      {
        name: "Faculty of Engineering",
        departments: ["Civil Engineering", "Electrical Engineering", "Mechanical Engineering", "Chemical Engineering"],
        programs: {
          bachelors: ["BSc in Civil Engineering", "BSc in Electrical Engineering"],
          masters: ["MSc in Civil Engineering"],
          phd: ["PhD in Engineering"],
        },
      },
    ],
    facilities: ["Modern Library", "Research Labs", "Student Dormitories", "Sports Complex", "Medical Clinic"],
    contact: {
      phone: "+251-11-123-4567",
      email: "info@aau.edu.et",
      address: "King George VI St, Addis Ababa, Ethiopia",
    },
  },
  {
    id: "bu",
    name: "Bahir Dar University",
    location: "Bahir Dar",
    region: "Amhara",
    type: "Public",
    yearEstablished: 2000,
    website: "https://www.bdu.edu.et",
    image: "/src/assets/image_University/BDU/BahirDargate.png",
    logo: "/src/assets/image_University/BDU/bahirdar.jpg",
    description: "A leading university located on the shores of Lake Tana, known for its beautiful campus and quality education.",
    president: {
      name: "Prof. Baylie Damtie",
    },
    faculties: [
      {
        name: "Faculty of Technology",
        departments: ["Information Technology", "Textile Engineering", "Food Engineering"],
        programs: {
          bachelors: ["BSc in IT", "BSc in Textile Engineering"],
          masters: ["MSc in IT"],
          phd: [],
        },
      },
      {
        name: "Faculty of Business and Economics",
        departments: ["Accounting", "Management", "Economics"],
        programs: {
          bachelors: ["BA in Accounting", "BA in Management"],
          masters: ["MBA", "MSc in Economics"],
          phd: [],
        },
      },
    ],
    facilities: ["Digital Library", "Computer Labs", "Conference Halls", "Sports Facilities", "Cafeteria"],
    contact: {
      phone: "+251-58-220-0000",
      email: "info@bdu.edu.et",
      address: "Bahir Dar, Amhara Region, Ethiopia",
    },
  },
  {
    id: "mu",
    name: "Mekelle University",
    location: "Mekelle",
    region: "Tigray",
    type: "Public",
    yearEstablished: 2000,
    website: "https://www.mu.edu.et",
    description: "A comprehensive university serving the northern region of Ethiopia with diverse academic programs.",
    president: {
      name: "Prof. Kindeya Gebrehiwot",
    },
    faculties: [
      {
        name: "College of Natural and Computational Sciences",
        departments: ["Mathematics", "Physics", "Chemistry", "Statistics", "Computer Science"],
        programs: {
          bachelors: ["BSc in Mathematics", "BSc in Computer Science"],
          masters: ["MSc in Mathematics", "MSc in Computer Science"],
          phd: ["PhD in Mathematics"],
        },
      },
      {
        name: "College of Health Sciences",
        departments: ["Medicine", "Pharmacy", "Nursing", "Public Health"],
        programs: {
          bachelors: ["MD", "BSc in Pharmacy", "BSc in Nursing"],
          masters: ["MSc in Public Health"],
          phd: [],
        },
      },
    ],
    facilities: ["Central Library", "Science Labs", "Health Center", "Student Housing", "Recreation Center"],
    contact: {
      phone: "+251-34-440-9304",
      email: "info@mu.edu.et",
      address: "Mekelle, Tigray Region, Ethiopia",
    },
  },
  {
    id: "ju",
    name: "Jimma University",
    location: "Jimma",
    region: "Oromia",
    type: "Public",
    yearEstablished: 1999,
    website: "https://www.ju.edu.et",
    image: "/src/assets/image_University/JMU/jimmaa.webp",
    logo: "/src/assets/image_University/JMU/jimmaaLogo.jpg",
    description: "Known for its strong health sciences programs and beautiful green campus environment.",
    president: {
      name: "Prof. Jemal Abafita",
    },
    faculties: [
      {
        name: "Institute of Health",
        departments: ["Medicine", "Nursing", "Midwifery", "Public Health", "Pharmacy"],
        programs: {
          bachelors: ["MD", "BSc in Nursing", "BSc in Pharmacy"],
          masters: ["MSc in Public Health", "MSc in Clinical Medicine"],
          phd: ["PhD in Public Health"],
        },
      },
      {
        name: "College of Agriculture and Veterinary Medicine",
        departments: ["Agronomy", "Animal Science", "Veterinary Medicine"],
        programs: {
          bachelors: ["BSc in Agronomy", "DVM"],
          masters: ["MSc in Agriculture"],
          phd: [],
        },
      },
    ],
    facilities: ["Medical Library", "Teaching Hospital", "Agricultural Research Farm", "Dormitories", "Sports Fields"],
    contact: {
      phone: "+251-47-111-2071",
      email: "info@ju.edu.et",
      address: "Jimma, Oromia Region, Ethiopia",
    },
  },
  {
    id: "hu",
    name: "Hawassa University",
    location: "Hawassa",
    region: "Sidama",
    type: "Public",
    yearEstablished: 2000,
    website: "https://www.hu.edu.et",
    image: "/src/assets/image_University/HU/Hawassa_University_main_gate.jpg",
    logo: "/src/assets/image_University/HU/hawasa logo.png",
    description: "A vibrant university located near Lake Hawassa, offering diverse programs and research opportunities.",
    president: {
      name: "Prof. Aklilu Dalelo",
    },
    faculties: [
      {
        name: "Faculty of Natural and Computational Sciences",
        departments: ["Biology", "Chemistry", "Physics", "Mathematics", "Computer Science"],
        programs: {
          bachelors: ["BSc in Biology", "BSc in Computer Science"],
          masters: ["MSc in Biology", "MSc in Computer Science"],
          phd: [],
        },
      },
      {
        name: "Faculty of Social Sciences and Humanities",
        departments: ["Psychology", "Sociology", "Geography", "History"],
        programs: {
          bachelors: ["BA in Psychology", "BA in Sociology"],
          masters: ["MA in Psychology"],
          phd: [],
        },
      },
    ],
    facilities: ["Main Library", "Computer Center", "Student Cafeteria", "Sports Complex", "Counseling Center"],
    contact: {
      phone: "+251-46-220-5264",
      email: "info@hu.edu.et",
      address: "Hawassa, Sidama Region, Ethiopia",
    },
  },
  {
    id: "ugu",
    name: "University of Gondar",
    location: "Gondar",
    region: "Amhara",
    type: "Public",
    yearEstablished: 2003,
    website: "https://www.uog.edu.et",
    description: "Situated in the historic city of Gondar, offering quality education with a focus on health sciences.",
    president: {
      name: "Prof. Habtamu Sewunet",
    },
    faculties: [
      {
        name: "College of Medicine and Health Sciences",
        departments: ["Medicine", "Dentistry", "Pharmacy", "Nursing", "Midwifery"],
        programs: {
          bachelors: ["MD", "DDS", "BSc in Pharmacy", "BSc in Nursing"],
          masters: ["MSc in Public Health", "MSc in Clinical Medicine"],
          phd: ["PhD in Medicine"],
        },
      },
      {
        name: "Faculty of Veterinary Medicine",
        departments: ["Clinical Studies", "Paraclinical Studies"],
        programs: {
          bachelors: ["DVM"],
          masters: ["MSc in Veterinary Medicine"],
          phd: [],
        },
      },
    ],
    facilities: ["University Hospital", "Research Library", "Veterinary Clinic", "Student Housing", "Gymnasium"],
    contact: {
      phone: "+251-58-114-0188",
      email: "info@uog.edu.et",
      address: "Gondar, Amhara Region, Ethiopia",
    },
    statistics: {
      staffs: 397,
      undergraduateStudents: 6123,
      postgraduateStudents: 1297,
      undergraduatePrograms: 18,
      postgraduatePrograms: 39,
    },
  },
  {
    id: "haru",
    name: "Haramaya University",
    location: "Haramaya",
    region: "Oromia",
    type: "Public",
    yearEstablished: 1954,
    website: "https://www.haramaya.edu.et",
    image: "/src/assets/image_University/HRU/HaramayaGate.jpg",
    logo: "/src/assets/image_University/HRU/haramaylogo.png",
    description: "One of Ethiopia's oldest universities, renowned for its excellence in agricultural sciences and research. Formerly known as Alemaya University.",
    president: {
      name: "Prof. Ahmedin Mohammed",
    },
    faculties: [
      {
        name: "College of Agriculture and Environmental Sciences",
        departments: ["Agronomy", "Horticulture", "Plant Sciences", "Soil Science", "Agricultural Economics"],
        programs: {
          bachelors: ["BSc in Agronomy", "BSc in Horticulture", "BSc in Plant Sciences", "BSc in Agricultural Economics"],
          masters: ["MSc in Agronomy", "MSc in Horticulture", "MSc in Plant Breeding", "MSc in Agricultural Economics"],
          phd: ["PhD in Agronomy", "PhD in Plant Sciences", "PhD in Agricultural Economics"],
        },
      },
      {
        name: "College of Natural and Computational Sciences",
        departments: ["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Statistics"],
        programs: {
          bachelors: ["BSc in Mathematics", "BSc in Physics", "BSc in Chemistry", "BSc in Biology", "BSc in Computer Science"],
          masters: ["MSc in Mathematics", "MSc in Physics", "MSc in Chemistry", "MSc in Computer Science"],
          phd: ["PhD in Mathematics", "PhD in Chemistry"],
        },
      },
      {
        name: "College of Business and Economics",
        departments: ["Accounting", "Management", "Economics", "Marketing"],
        programs: {
          bachelors: ["BA in Accounting", "BA in Management", "BA in Economics", "BA in Marketing"],
          masters: ["MBA", "MSc in Economics", "MSc in Accounting"],
          phd: ["PhD in Economics"],
        },
      },
      {
        name: "College of Health and Medical Sciences",
        departments: ["Medicine", "Nursing", "Public Health", "Pharmacy"],
        programs: {
          bachelors: ["MD", "BSc in Nursing", "BSc in Pharmacy"],
          masters: ["MSc in Public Health", "MSc in Clinical Medicine"],
          phd: [],
        },
      },
    ],
    facilities: ["Agricultural Research Center", "Modern Library", "Teaching Hospital", "Computer Labs", "Student Dormitories", "Sports Complex", "Research Farms"],
    contact: {
      phone: "+251-25-553-0000",
      email: "info@haramaya.edu.et",
      address: "Haramaya, Oromia Region, Ethiopia",
    },
    statistics: {
      undergraduateStudents: 19503,
      mastersStudents: 2189,
      phdStudents: 500,
      undergraduatePrograms: 72,
      mastersPrograms: 137,
      phdPrograms: 46,
    },
  },
];

export const getUniversityById = (id: string): University | undefined => {
  return universities.find((uni) => uni.id === id);
};

export const getTotalPrograms = (university: University): number => {
  return university.faculties.reduce((total, faculty) => {
    return (
      total +
      faculty.programs.bachelors.length +
      faculty.programs.masters.length +
      faculty.programs.phd.length
    );
  }, 0);
};

export const getTotalUniversities = (): number => {
  return universities.length;
};

export const getTotalProgramsCount = (): number => {
  return universities.reduce((total, uni) => total + getTotalPrograms(uni), 0);
};

export const getEstimatedTotalStudents = (): string => {
  // Estimate: Average of 200-300 students per program across all universities
  // This is a conservative estimate for Ethiopian universities
  const totalPrograms = getTotalProgramsCount();
  const avgStudentsPerProgram = 250; // Average students per program
  const estimatedStudents = totalPrograms * avgStudentsPerProgram;
  
  // Format the number (e.g., 50000 -> "50K+", 125000 -> "125K+")
  if (estimatedStudents >= 1000000) {
    return `${(estimatedStudents / 1000000).toFixed(1)}M+`;
  } else if (estimatedStudents >= 1000) {
    return `${Math.round(estimatedStudents / 1000)}K+`;
  }
  return `${estimatedStudents}+`;
};

export const getFreeAccessPercentage = (): string => {
  // Always 100% free access
  return "100%";
};

export const getTotalProgramsNumeric = (): number => {
  return getTotalProgramsCount();
};

export const getEstimatedTotalStudentsNumeric = (): number => {
  const totalPrograms = getTotalProgramsCount();
  const avgStudentsPerProgram = 250;
  return totalPrograms * avgStudentsPerProgram;
};

export const getFreeAccessNumeric = (): number => {
  return 100;
};
