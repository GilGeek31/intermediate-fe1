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
    <div className="flex flex-col md:block bg-white rounded-xl border border-grey-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex flex-row md:flex-col justify-center items-center p-2">
        <img
          src={thumbnail}
          alt={title}
          className=" rounded-lg w-20 md:w-full h-20 md:h-40 object-cover"
        />

        <div className="p-4 flex flex-col gap-2">
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
      <div className=" flex items-center justify-between md:mt-2 px-2 md:p-5 border-t border-grey-100">
        <Rating value={rating.value} count={rating.count} />
        <span className=" text-h4 font-bold text-text-button-primary">
          {price}
        </span>
      </div>
    </div>
  );
}
