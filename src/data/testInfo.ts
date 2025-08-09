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
    title: "About General English Course",
    description:
      "Our General English course focuses on everyday communication skills in English. It covers all four language skills - speaking, listening, reading, and writing - with emphasis on practical usage in daily situations.",
  },
  "General French": {
    title: "About General French Course",
    description:
      "The General French course is designed to develop your French language skills for everyday use. The course emphasizes practical communication while building vocabulary and grammar fundamentals.",
  },
  "Business English": {
    title: "About Business English Course",
    description:
      "Business English focuses on the language skills needed in professional contexts. Learn to communicate effectively in meetings, write business emails, give presentations, and negotiate in English.",
  },
};
