import type { Programme } from "../models/programme";

export const programmes: Programme[] = [
  {
    id: 1,
    slug: "baking-and-pastry",
    title: "Baking & Pastry",
    category: "Hospitality",
    level: "Short Course",
    duration: "2-3 Months",
    intake: ["January", "May", "September"],
    studyMode: "Full Time",
    image: "/images/course-placeholder.jpg",
    featured: true,
    shortDescription:
      "Gain practical skills in baking, pastry preparation, cake decoration, and kitchen safety.",
    overview:
      "This programme equips learners with hands-on skills in baking and pastry production for employment or entrepreneurship.",
    requirements: [
      "Basic literacy skills",
      "Passion for food preparation",
      "Willingness to learn practical skills",
    ],
    learningOutcomes: [
      "Prepare common bakery products",
      "Understand kitchen hygiene and safety",
      "Decorate cakes professionally",
      "Package and present baked products",
    ],
    careerOpportunities: [
      "Bakery assistant",
      "Cake decorator",
      "Self-employed baker",
      "Pastry assistant",
    ],
  },
  {
    id: 2,
    slug: "hairdressing-and-nail-technology",
    title: "Hairdressing & Nail Technology",
    category: "Beauty & Cosmetology",
    level: "Short Course",
    duration: "2-3 Months",
    intake: ["January", "May", "September"],
    studyMode: "Full Time",
    image: "/images/course-placeholder.jpg",
    featured: true,
    shortDescription:
      "Learn hair styling, salon practice, nail care, beauty techniques, and customer service.",
    overview:
      "This programme prepares learners for salon work and beauty entrepreneurship through practical training.",
    requirements: ["Basic literacy skills", "Interest in beauty and grooming"],
    learningOutcomes: [
      "Perform basic hair styling",
      "Understand salon hygiene",
      "Offer nail care services",
      "Serve clients professionally",
    ],
    careerOpportunities: [
      "Hair stylist",
      "Nail technician",
      "Salon assistant",
      "Beauty entrepreneur",
    ],
  },
];
