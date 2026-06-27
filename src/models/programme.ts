export type FAQ = {
  question: string;
  answer: string;
};

export type Programme = {
  id: number;
  slug: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  intake: string[];
  studyMode: string;
  image: string;
  featured: boolean;
  shortDescription: string;
  overview: string;
  requirements: string[];
  learningOutcomes: string[];
  careerOpportunities: string[];
  fees?: string;
  gallery?: string[];
  faqs?: FAQ[];
};
