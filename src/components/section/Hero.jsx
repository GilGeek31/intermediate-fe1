import Button from "../ui/Button";
export default function Hero({
  backgroundImage,
  title,
  subtitle,
  align = "center", // "center" | "left"
  ctaText, // kalau tidak diisi, tombol tidak dirender
  onCtaClick,
  rating, // { value: 3.5, count: 86 } — opsional, tidak dirender kalau undefined
  minHeight = "py-6 md:py-12", // bisa di-override untuk hero yang lebih pendek
}) {
  const isCenter = align === "center";

  return (
    <section className=" w-full px-4 md:px-8 mt-8 xl:px-32">
      <div
        className="relative rounded-2xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div
          className={`relative flex flex-col gap-4 px-6 justify-center h-[400px] md:px-12 ${minHeight}
            ${isCenter ? "items-center text-center" : "items-start text-left"}`}
        >
          <h1
            className={`text-text-light-primary font-heading font-bold text-heading-4 md:text-heading-2 lg:text-heading-1 leading-tight
            ${isCenter ? "max-w-3xl" : "max-w-2xl"}`}
          >
            {title}
          </h1>

          <p
            className={`text-text-light-primary text-body-sm md:text-body-md md:font-normal ${isCenter ? "max-w-2xl" : "max-w-xl"}`}
          >
            {subtitle}
          </p>

          {rating && (
            <div className="flex items-center gap-2">
              <span className="text-warning-default text-lg leading-none">
                {"★".repeat(Math.round(rating.value))}
                <span className="text-grey-400">
                  {"★".repeat(5 - Math.round(rating.value))}
                </span>
              </span>
              <span className="text-white/80 text-body-sm underline">
                {rating.value} ({rating.count})
              </span>
            </div>
          )}

          {ctaText && (
            <button
              type="button"
              onClick={onCtaClick}
              className=" bg-primary-100 px-1.5 md:px-6 py-3 rounded-xl max-w-fit text-body-sm font-normal md:text-body-md text-text-light-primary "
            >
              {ctaText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
