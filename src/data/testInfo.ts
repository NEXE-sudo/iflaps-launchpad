interface TestInfo {
  title: string;
  description: string;
  format: string;
  sections?: string;
  duration?: string;
  score?: string;
  validity?: string;
  recognition?: string;
  features?: string[];
}

export const testInfoData: Record<string, TestInfo> = {
  IELTS: {
    title: "IELTS (International English Language Testing System)",
    description:
      "The world's most popular English language test for higher education and global migration.",
    format: "Available in Academic and General Training versions",
    sections: "Reading, Writing, Listening, and Speaking",
    duration: "2 hours 45 minutes total",
    score: "Band scores from 1-9",
    validity: "Valid for 2 years",
    recognition: "Accepted by over 11,000 organisations worldwide",
    features: [
      "Computer or paper-based testing",
      "Results within 13 days",
      "Speaking test with certified examiner",
    ],
  },
  TOEFL: {
    title: "TOEFL (Test of English as a Foreign Language)",
    description:
      "Measures your ability to use and understand English at the university level.",
    format: "Internet-based test (iBT)",
    sections: "Reading, Writing, Listening, and Speaking",
    duration: "About 3 hours",
    score: "0-120 points total",
    validity: "Valid for 2 years",
    recognition: "Accepted by more than 11,500 institutions in 160 countries",
    features: [
      "100% computer-based",
      "Home Edition available",
      "Instant score preview",
    ],
  },
  DET: {
    title: "Duolingo English Test",
    description:
      "A modern, convenient English proficiency test that can be taken online anytime.",
    format: "Computer-adaptive test",
    sections: "Literacy, Comprehension, Conversation, and Production",
    duration: "1 hour",
    score: "10-160 points",
    validity: "Valid for 2 years",
    recognition: "Accepted by over 3,000 institutions",
    features: [
      "AI-proctored",
      "Results within 48 hours",
      "Take from home anytime",
    ],
  },
  DELF: {
    title: "DELF (Diplôme d'études en langue française)",
    description:
      "An official certification of French language proficiency for non-native speakers, recognised worldwide.",
    format: "Paper-based exam",
    sections: "Listening, Reading, Writing, and Speaking",
    duration: "1.5 to 2.5 hours depending on the level",
    score: "Out of 100 points (minimum 50 to pass)",
    validity: "Lifetime validity",
    recognition:
      "Recognised by the French Ministry of Education and organisations worldwide",
    features: [
      "Separate exams for A1, A2, B1, and B2 levels",
      "International recognition",
      "No expiration date",
    ],
  },
  "General English": {
    title: "Cambridge English Qualifications",
    description:
      "In-depth exams that make learning English enjoyable, effective and rewarding.",
    format: "Paper-based or computer-based depending on exam level",
    sections: "Reading & Use of English, Writing, Listening, and Speaking",
    duration: "Varies from 2 to 4 hours depending on level",
    score: "Scaled score based on the CEFR level",
    validity: "Lifetime validity",
    recognition:
      "Accepted by thousands of universities, employers, and governments worldwide",
    features: [
      "B2 First, C1 Advanced, and C2 Proficiency levels",
      "Speaking test with two candidates",
      "Detailed feedback on skills",
    ],
  },
  "General French": {
    title: "TCF (Test de Connaissance du Français)",
    description:
      "Evaluates your French language skills for academic, professional, or immigration purposes.",
    format: "Computer-based or paper-based",
    sections: "Listening, Reading, and Writing (with optional Speaking)",
    duration: "1.5 to 2 hours depending on modules",
    score: "Level-based scoring from A1 to C2",
    validity: "Valid for 2 years",
    recognition:
      "Recognised by French universities, employers, and immigration authorities",
    features: [
      "Flexible modular structure",
      "International recognition",
      "Accepted for French citizenship applications",
    ],
  },
  "Business English": {
    title: "Cambridge Business English Certificates (BEC)",
    description:
      "Tests your English in a business context, available at three levels: Preliminary, Vantage, and Higher.",
    format: "Paper-based or computer-based",
    sections: "Reading, Writing, Listening, and Speaking",
    duration: "About 2 to 3 hours depending on level",
    score: "Scaled score aligned to CEFR levels",
    validity: "Lifetime validity",
    recognition:
      "Accepted by companies, governments, and educational institutions worldwide",
    features: [
      "Focus on workplace communication",
      "Realistic business scenarios",
      "Speaking test with two candidates",
    ],
  },
};
