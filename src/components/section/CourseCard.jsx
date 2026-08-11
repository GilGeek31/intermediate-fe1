import Rating from "../ui/Rating";

export default function CourseCard({
  thumbnail,
  title,
  description,
  instructor,
  rating,
  price,
}) {
  return (
    <div className="bg-white rounded-xl border border-grey-200 overflow-hidden hover:shadow-md transition-shadow">
      <img src={thumbnail} alt={title} className="w-full h-40 object-cover" />

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-body-md font-bold text-text-dark-primary line-clamp-2">
          {title}
        </h3>
        <p className="text-body-sm text-text-dark-secondary line-clamp-2">
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

        <div className="flex items-center justify-between mt-2 pt-2 border-t border-grey-100">
          <Rating value={rating.value} count={rating.count} />
          <span className="text-body-md font-bold text-text-dark-primary">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
}
