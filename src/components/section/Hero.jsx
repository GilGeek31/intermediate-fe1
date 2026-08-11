export default function Hero({
  backgroundImage,
  title,
  subtitle,
  align = "center", // "center" | "left"
  ctaText, // kalau tidak diisi, tombol tidak dirender
  onCtaClick,
  rating, // { value: 3.5, count: 86 } — opsional, tidak dirender kalau undefined
  minHeight = "py-16 md:py-24", // bisa di-override untuk hero yang lebih pendek
}) {
  const isCenter = align === "center";

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
      <div
        className="relative rounded-2xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div
          className={`relative flex flex-col gap-4 px-6 md:px-12 ${minHeight}
            ${isCenter ? "items-center text-center" : "items-start text-left"}`}
        >
          <h1
            className={`text-white font-bold text-h3 md:text-4xl lg:text-h2 leading-tight
            ${isCenter ? "max-w-3xl" : "max-w-2xl"}`}
          >
            {title}
          </h1>

          <p
            className={`text-white/90 text-body-sm md:text-body-md ${isCenter ? "max-w-2xl" : "max-w-xl"}`}
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
              onClick={onCtaClick}
              className="bg-primary-600 hover:bg-primary-500 hover:text-text-dark-primary
               text-white font-semibold text-body-md px-2 py-2
                rounded-lg transition-colors mt-2"
            >
              {ctaText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
