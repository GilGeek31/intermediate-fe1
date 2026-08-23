import { useState } from "react";

export default function NewsletterSection({ backgroundImage }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribe email:", email);
    // TODO: panggil API subscribe di sini
  };

  return (
    <section className="w-full px-4 md:px-8 mt-8 xl:px-32">
      <div
        className="relative rounded-lg overflow-hidden bg-cover bg-center h-100"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Konten */}
        <div className="relative h-full flex flex-col items-center text-center gap-2 px-6 md:px-12 py-14 md:py-16">
          <span className="text-body-md font-normal text-text-light-secondary tracking-wide">
            NEWSLETTER
          </span>
          <h3 className="font-heading text-heading-4 text-text-light-primary">
            Mau Belajar Lebih Banyak ?
          </h3>
          <p className="text-body-sm font-normal tracking-wide text-text-light-primary mb-7">
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
                        bg-white sm:bg-transparent text-body-sm font-normal text-text-dark-secondary text-center sm:text-left
                        placeholder:text-grey-400 focus:outline-none focus:ring-2 focus:ring-primary-300 sm:focus:ring-0"
            />

            <button
              type="submit"
              className="shrink-0 bg-secondary-100 hover:bg-secondary-600 text-text-light-primary 
                    text-body-sm font-bold md:text-body-md px-6 py-3 sm:py-2.5 rounded-lg sm:rounded-full transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
