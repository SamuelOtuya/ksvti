export type NewsItem = {
  id: number;
  slug: string;
  title: string;
  category: "News" | "Event" | "Announcement";
  date: string;
  image: string;
  excerpt: string;
  content: string[];
  featured?: boolean;
};
