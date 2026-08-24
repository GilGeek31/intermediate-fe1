import Navbar from "../components/layout/Navbar";
import Hero from "../components/section/Hero";
import HeroImg1 from "../assets/hero/hero-image-1.jpg";
import CourseSection from "../components/section/CourseSection";
import imgNews from "../assets/hero/form-thumbnail.jpg";
import NewsletterSection from "../components/section/NewsletterSection";
import Footer from "../components/layout/Footer";
import { useRef } from "react";

export default function HomePage() {
  const courseSectionRef = useRef(null);

  const handleScrollToCourse = () => {
    courseSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-slate-100 flex flex-col gap-1 items-center max-w-[1440px] justify-center">
      <Navbar isLogin={true} />
      <Hero
        backgroundImage={HeroImg1}
        title="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
        subtitle="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
        align="center"
        ctaText="Temukan Video Course untuk Dipelajari!"
        onCtaClick={handleScrollToCourse}
      />
      <CourseSection sectionRef={courseSectionRef} />
      <NewsletterSection backgroundImage={imgNews} />
      <Footer />
    </div>
  );
}
