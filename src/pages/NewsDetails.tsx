import { CalendarDays } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { newsItems } from "../data/news";

export default function NewsDetails() {
  const { slug } = useParams();
  const article = newsItems.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section className="px-6 py-24 text-center">
        <h1 className="text-4xl font-black text-[#2d1b5e]">
          Article Not Found
        </h1>

        <Link
          to="/news"
          className="mt-6 inline-block rounded bg-[#f5a623] px-8 py-4 font-bold text-white"
        >
          Back to News
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="relative bg-[#2d1b5e] px-6 py-24 lg:px-16">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#2d1b5e] via-[#2d1b5e]/90 to-[#2d1b5e]/50" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <span className="rounded-full bg-[#f5a623] px-3 py-1 text-xs font-bold text-white">
            {article.category}
          </span>

          <h1 className="mt-5 text-4xl font-black uppercase leading-tight text-white lg:text-6xl">
            {article.title}
          </h1>

          <div className="mt-5 flex items-center gap-2 text-white/70">
            <CalendarDays size={18} className="text-[#f5a623]" />
            {article.date}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-16">
        <article className="mx-auto max-w-4xl rounded-xl bg-white text-gray-600">
          {article.content.map((paragraph, index) => (
            <p key={index} className="mb-6 text-sm leading-8">
              {paragraph}
            </p>
          ))}

          <Link
            to="/news"
            className="mt-8 inline-block rounded bg-[#2d1b5e] px-8 py-4 font-bold text-white hover:bg-[#3d2680]"
          >
            Back to News
          </Link>
        </article>
      </section>
    </>
  );
}
