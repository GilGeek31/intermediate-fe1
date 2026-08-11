import { useState } from "react";
import CategoryTabs from "../section/CategoryTabs";
import CourseCard from "../section/CourseCard";
import Imgthumbnail from "../../assets/card-image/Big 4 Auditor Financial Analyst_1.jpg";
import ImgAvatar from "../../assets/card-avatar/avatar-01.png";

const categories = [
  "Semua Kelas",
  "Pemasaran",
  "Desain",
  "Pengembangan Diri",
  "Bisnis",
];

const dummyCourses = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  thumbnail: Imgthumbnail,
  title: "Big 4 Auditor Financial Analyst",
  description:
    "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
  instructor: {
    name: "Jenna Ortega",
    role: "Senior Accountant",
    company: "Gojek",
    avatar: ImgAvatar,
  },
  rating: { value: 3.4, count: 98 },
  price: "Rp. 300k",
}));

export default function CourseSection() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // TODO: nanti filter dummyCourses berdasarkan activeCategory saat data sudah dari API
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
      <div className="text-center mb-6">
        <h2 className="text-h4 text-text-dark-primary">
          Koleksi Video Pembelajaran Unggulan
        </h2>
        <p className="text-body-md text-text-dark-secondary mt-1">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>

      <CategoryTabs categories={categories} onChange={setActiveCategory} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {dummyCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}
