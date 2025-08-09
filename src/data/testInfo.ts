interface TestInfo {
  title: string;
  description: string;
}

export const testInfoData: Record<string, TestInfo> = {
  IELTS: {
    title: "About IELTS (International English Language Testing System)",
    description:
      "IELTS is the world's most popular English language test for higher education and global migration. It assesses all of your English skills — reading, writing, listening and speaking. The test is designed to reflect how you will use English at study, at work, and in your new life abroad.",
  },
  TOEFL: {
    title: "About TOEFL (Test of English as a Foreign Language)",
    description:
      "TOEFL is a standardized test to measure the English language ability of non-native speakers wishing to enroll in English-speaking universities. The test is accepted by more than 11,000 universities and other institutions in over 190 countries and territories.",
  },
  DET: {
    title: "About Duolingo English Test",
    description:
      "The Duolingo English Test is an online English proficiency test that can be taken from your computer. The test is adaptive, which means that the questions become harder or easier depending on your answers, and provides fast results. It's accepted by thousands of institutions worldwide.",
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
