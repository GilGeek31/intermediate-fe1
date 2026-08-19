import Rating from "../ui/Rating";
import { Pencil, Trash2 } from "lucide-react";

export default function CourseCard({
  id,
  thumbnail,
  title,
  description,
  instructor,
  rating,
  price,
  onEdit,
  onDelete,
}) {
  return (
    <div
      className="flex flex-col mb-2 p-4 max-w-sm md:block bg-white
     rounded-xl border border-amber-600 hover:shadow-md transition-shadow"
    >
      <div className=" relative group flex flex-row gap-2 md:flex-col md:justify-center md:items-center md:gap-0">
        <div className="absolute top-4 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button
            onClick={() => onEdit(id)}
            className=" bg-white rounded-full p-1.5 shadow hover:bg-grey-50 "
            aria-label="Edit Course"
          >
            <Pencil size={14} className="text-grey-700" />
          </button>
          <button
            onClick={() => onDelete(id)}
            className=" bg-white p-1.5 rounded-full shadow hover:bg-error-bg "
            aria-label="Hapus Course"
          >
            <Trash2 size={14} className=" text-error-default" />
          </button>
        </div>
        <img
          src={thumbnail}
          alt={title}
          className=" rounded-xl w-20 h-20 md:w-86 md:h-48 mb-2 object-cover"
        />

        <div className="flex flex-col gap-1">
          <h3 className="text-body-md font-bold text-text-dark-primary line-clamp-2">
            {title}
          </h3>
          <p className="hidden md:block text-body-sm text-text-dark-secondary line-clamp-2">
            {description}
          </p>

          <div className="flex items-center gap-2 mt-1">
            <img
              src={instructor.avatar}
              alt={instructor.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="text-body-sm font-semibold text-text-dark-primary">
                {instructor.name}
              </p>
              <p className="text-body-sm text-text-dark-secondary">
                {instructor.role} di{" "}
                <span className="font-semibold">{instructor.company}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-between md:pt-2 border-grey-100">
        <Rating value={rating.value} count={rating.count} />
        <span className=" text-h4 font-bold text-text-button-primary">
          {price}
        </span>
      </div>
    </div>
  );
}
