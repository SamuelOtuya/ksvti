import AboutPreview from "../components/home/AboutPreview";
import CounterSection from "../components/home/CounterSection";
import CoursesSection from "../components/home/CoursesSection";
import CTABanner from "../components/home/CTABanner";
import Hero from "../components/home/Hero";
import NewsSection from "../components/home/NewsSection";
import StatsBar from "../components/home/StatsBar";
import WhyChooseUs from "../components/home/WhyChooseUs";

// Home.tsx
export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <CoursesSection />
      <WhyChooseUs />
      <AboutPreview />
      <CounterSection />
      <NewsSection />
      <CTABanner />
    </>
  );
}
