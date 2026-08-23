import { useState, useEffect } from "react";
import { X } from "lucide-react";

const emptyForm = {
  title: "",
  description: "",
  thumbnail: "",
  price: "",
  instructorName: "",
  instructorRole: "",
  instructorCompany: "",
};

export default function CourseFormModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) {
  const [form, setForm] = useState(emptyForm);

  //otomatis isi jika mode edit
  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title,
        description: initialData.description,
        thumbnail: initialData.thumbnail,
        price: initialData.price,
        instructorName: initialData.instructor.name,
        instructorRole: initialData.instructor.role,
        instructorCompany: initialData.instructor.company,
      });
    } else {
      setForm(emptyForm);
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title: form.title,
      description: form.description,
      thumbnail: form.thumbnail,
      price: form.price,
      instructor: {
        name: form.instructorName,
        role: form.instructorRole,
        company: form.instructorCompany,
        avatar: "/img/card-avatar/avatar-01.png",
      },
      rating: initialData?.rating || { value: 0, count: 0 },
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-h6 text-text-dark-primary">
            {initialData ? "Edit Course" : "Tambah Course"}
          </h3>
          <button
            onClick={onClose}
            className="text-grey-500 hover:text-grey-700"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Judul course"
            required
            className="px-4 py-2.5 rounded-lg border border-grey-200 bg-white text-body-md focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Deskripsi singkat"
            required
            rows={3}
            className="px-4 py-2.5 rounded-lg border border-grey-200 bg-white text-body-md focus:outline-none focus:ring-2 focus:ring-primary-300"
          />

          {/* <input
            name="thumbnail"
            value={form.thumbnail}
            onChange={handleChange}
            placeholder="URL gambar thumbnail"
            required
            className="px-4 py-2.5 rounded-lg border border-grey-200 bg-white text-body-md focus:outline-none focus:ring-2 focus:ring-primary-300"
          /> */}

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const previewUrl = URL.createObjectURL(file);
                setForm({ ...form, thumbnail: previewUrl });
              }
            }}
            className="px-4 py-2.5 rounded-lg border border-grey-200 bg-white text-body-md"
          />
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Harga (misal: Rp. 300k)"
            required
            className="px-4 py-2.5 rounded-lg border border-grey-200 bg-white text-body-md focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
          <input
            name="instructorName"
            value={form.instructorName}
            onChange={handleChange}
            placeholder="Nama instruktur"
            required
            className="px-4 py-2.5 rounded-lg border border-grey-200 bg-white text-body-md focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
          <div className="flex flex-col gap-3 w-full">
            <input
              name="instructorRole"
              value={form.instructorRole}
              onChange={handleChange}
              placeholder="Jabatan"
              required
              className="flex-1 px-4 py-2.5 rounded-lg border border-grey-200 bg-white text-body-md focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <input
              name="instructorCompany"
              value={form.instructorCompany}
              onChange={handleChange}
              placeholder="Perusahaan"
              required
              className="flex-1 px-4 py-2.5 rounded-lg border border-grey-200 bg-white text-body-md focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
          </div>

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-lg border bg-green-50 text-green-500  hover:bg-green-100"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-lg bg-primary-100 hover:bg-primary-300 text-text-light-primary"
            >
              {initialData ? "Simpan" : "Tambah"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
