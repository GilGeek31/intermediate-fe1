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
    <section className="w-full px-4 md:px-8 mt-16 xl:px-32">
      <div className="text-center mb-6">
        <h2 className="text-h4 text-text-dark-primary">
          Koleksi Video Pembelajaran Unggulan
        </h2>
        <p className="text-body-md text-text-dark-secondary mt-1">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>

      <button
        onClick={handleAddClict}
        className=" flex items-center gap-1.5 bg-primary-500 hover:bg-primary-600
        text-body-sm px-4 py-2.5 rounded-lg shrink-0 "
      >
        <Plus size={16} />
        Tambah
      </button>

      <CategoryTabs categories={categories} onChange={setActiveCategory} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            {...course}
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
          />
        ))}
      </div>
      <CourseFormModal
        isOpen={isModalOpen}
        onClose={() => setisModalOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={editingCourse}
      />
    </section>
  );
}
