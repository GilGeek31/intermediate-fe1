import { useState } from "react";
import { Plus } from "lucide-react";
import CategoryTabs from "../section/CategoryTabs";
import CourseCard from "../section/CourseCard";
import CourseFormModal from "../ui/CourseFormModal";
import Imgthumbnail from "../../assets/card-image/Big 4 Auditor Financial Analyst_1.jpg";
import ImgAvatar from "../../assets/card-avatar/avatar-01.png";
import initialCourses from "../../data/course.json";
import { set } from "zod";

const categories = [
  "Semua Kelas",
  "Pemasaran",
  "Desain",
  "Pengembangan Diri",
  "Bisnis",
];

export default function CourseSection() {
  const [courses, setCourses] = useState(initialCourses);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  //create
  const handleAddClict = () => {
    setEditingCourse(null);
    setisModalOpen(true);
  };

  //edit
  const handleEditClick = (id) => {
    const course = courses.find((c) => c.id === id);
    setEditingCourse(course);
    setisModalOpen(true);
  };

  //delete
  const handleDeleteClick = (id) => {
    if (confirm("yakin mau hapus course ini?")) {
      setCourses((prev) => prev.filter((c) => c.id !== id));
    }
  };

  //submit
  const handleFormSubmit = (formdata) => {
    if (editingCourse) {
      setCourses((prev) =>
        prev.map((c) =>
          c.id === editingCourse.id ? { ...c, ...formdata } : c,
        ),
      );
    } else {
      //create
      const newCourse = { id: Date.now, ...formdata };
      setCourses((prev) => [newCourse, ...prev]);
    }
  };

  // TODO: nanti filter dummyCourses berdasarkan activeCategory saat data sudah dari API
  return (
    <>
      <section className="w-full max-w-300 px-4 md:px-4 mt-5 md:mt-16 ">
        <div className="md:text-center mb-6">
          <h2 className="font-heading text-heading-4 md:text-heading-3 text-text-dark-primary">
            Koleksi Video Pembelajaran Unggulan
          </h2>
          <p className="text-body-sm md:text-body-md text-text-dark-secondary mt-3">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>

        <CategoryTabs categories={categories} onChange={setActiveCategory} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 justify-items-center">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      </section>
      <button
        onClick={handleAddClict}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full 
        bg-primary-100 text-white
        shadow-[0_0_15px_3px_rgba(34,197,94,0.6),0_0_30px_8px_rgba(34,197,94,0.4)]
        hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.8),0_0_40px_12px_rgba(34,197,94,0.5)]
        flex items-center justify-center transition-shadow duration-300"
      >
        <Plus size={20} md:size={40} strokeWidth={2} />
      </button>
      <CourseFormModal
        isOpen={isModalOpen}
        onClose={() => setisModalOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={editingCourse}
      />
    </>
  );
}
