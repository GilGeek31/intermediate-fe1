import { useState } from "react";

export default function NewsletterSection({ backgroundImage }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribe email:", email);
    // TODO: panggil API subscribe di sini
  };

  return (
    <section className=" w-full px-4 md:px-8 mt-8 xl:px-32">
      <div
        className="relative rounded-lg overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Konten */}
        <div className="relative flex flex-col items-center text-center gap-3 px-6 md:px-12 py-14 md:py-16">
          <span className=" text-text-news text-h5 font-thin tracking-wide">
            NEWSLETTER
          </span>
          <h3 className="text-white text-h3 font-bold md:text-h4">
            Mau Belajar Lebih Banyak ?
          </h3>
          <p className="text-white/80 text-body-md max-w-xl">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik VideoBelajar
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-2 sm:bg-white sm:rounded-full sm:p-1.5 w-full max-w-md"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan Emailmu"
              className="flex-1 min-w-0 px-4 py-3 sm:py-2.5 rounded-lg sm:rounded-full
                        bg-white sm:bg-transparent text-body-md text-text-dark-primary
                        placeholder:text-grey-400 focus:outline-none focus:ring-2 focus:ring-primary-300 sm:focus:ring-0"
            />

            <button
              type="submit"
              className="shrink-0 bg-bg-primary hover:bg-secondary-600 text-white font-semibold
                    text-body-md px-6 py-3 sm:py-2.5 rounded-lg sm:rounded-full transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
