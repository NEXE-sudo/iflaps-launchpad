interface TestInfo {
  title: string;
  description: string;
  format?: string;
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
    recognition: "Accepted by over 11,000 organizations worldwide",
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
    title: "About DELF (Diplôme d'études en langue française)",
    description:
      "DELF is an official certification of French language proficiency for non-native speakers. The exam evaluates your ability to use French in real-life situations and is recognized worldwide. It's administered by the French Ministry of Education.",
  },
  "General English": {
    title: "About Cambridge English Exams",
    description:
      "Cambridge English Qualifications are in-depth exams that make learning English enjoyable, effective and rewarding. The exams include B2 First (FCE), C1 Advanced (CAE), and C2 Proficiency (CPE), each testing your English skills at different levels of the Common European Framework of Reference (CEFR).",
  },
  "General French": {
    title: "About TCF (Test de Connaissance du Français)",
    description:
      "The TCF is a French language test administered by France Education International. It evaluates your French language skills for academic, professional, or immigration purposes. The test assesses listening comprehension, reading comprehension, and writing skills through a series of multiple-choice questions and writing tasks.",
  },
  "Business English": {
    title: "About Cambridge Business English Certificates (BEC)",
    description:
      "The Business English Certificates (BEC) from Cambridge Assessment English specifically test your English in a business context. Available at three levels: BEC Preliminary, BEC Vantage, and BEC Higher, these tests assess your ability to use English confidently in international business environments.",
  },
};
