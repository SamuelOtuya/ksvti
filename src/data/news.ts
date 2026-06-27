import type { NewsItem } from "../models/news-item";

export const newsItems: NewsItem[] = [
  {
    id: 1,
    slug: "september-intake-ongoing",
    title: "September Intake Ongoing – Apply Now",
    category: "Announcement",
    date: "May 10, 2026",
    image: "/images/news-placeholder.jpg",
    excerpt:
      "Applications are now open for learners interested in joining our practical skills training programmes.",
    featured: true,
    content: [
      "Kahawa Sukari Vocational & Training Institute is pleased to announce that applications for the upcoming intake are now open.",
      "Prospective students are encouraged to visit the admissions office or apply online through the website.",
      "Available programmes include hospitality, beauty, ICT, electrical installation, plumbing, and other practical skills courses.",
    ],
  },
  {
    id: 2,
    slug: "industrial-attachment-opportunities",
    title: "Industrial Attachment Opportunities for Students",
    category: "News",
    date: "May 5, 2026",
    image: "/images/news-placeholder.jpg",
    excerpt:
      "KSVTI continues to strengthen partnerships that give students real workplace exposure.",
    content: [
      "Industrial attachment remains an important part of practical training at KSVTI.",
      "Through partnerships with industry players, students gain hands-on experience and exposure to real working environments.",
    ],
  },
  {
    id: 3,
    slug: "campus-open-day",
    title: "Campus Open Day – Visit Our Training Facilities",
    category: "Event",
    date: "April 28, 2026",
    image: "/images/news-placeholder.jpg",
    excerpt:
      "Parents, guardians, and prospective learners are invited to visit our campus and interact with our trainers.",
    content: [
      "KSVTI will host an open day to showcase training facilities, workshops, and available programmes.",
      "Visitors will have a chance to meet instructors, ask questions, and learn more about admissions.",
    ],
  },
];
