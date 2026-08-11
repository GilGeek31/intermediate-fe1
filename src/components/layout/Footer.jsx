import logo from "../../assets/logo-video-belajar.png";
import FooterColumn from "../section/FooterColumn";
import SocialLinks from "../ui/SocialLinks";

const footerColumns = [
  {
    title: "Kategori",
    links: [
      { label: "Digital & Teknologi", href: "#" },
      { label: "Pemasaran", href: "#" },
      { label: "Manajemen Bisnis", href: "#" },
      { label: "Pengembangan Diri", href: "#" },
      { label: "Desain", href: "#" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Ketentuan Layanan", href: "#" },
      { label: "Bantuan", href: "#" },
    ],
  },
  {
    title: "Komunitas",
    links: [
      { label: "Tips Sukses", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];

const socialLinks = [
  { platform: "linkedin", href: "#" },
  { platform: "facebook", href: "#" },
  { platform: "instagram", href: "#" },
  { platform: "twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-bg-base mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-col md:flex-row gap-5 md:gap-16">
          {/* Brand */}
          <div className="flex items-start flex-col gap-1 md:w-1/3">
            <img
              src={logo}
              alt="Logo VideoBelajar"
              className="rounded-full object-cover"
            />
            <p className="text-body-sm text-text-dark-primary font-bold ">
              Gali Potensi Anda Melalui Pembelajaran Video di VideoBelajar
            </p>
            <p className="text-body-sm text-text-dark-secondary">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
            </p>
            <p className="text-body-sm text-text-dark-secondary">
              +62-877-7123-1234
            </p>
          </div>

          {/* Columns */}
          <div className="flex-1 flex flex-col md:flex-row md:justify-between gap-1 md:gap-6">
            {footerColumns.map((col) => (
              <div key={col.title} className="md:flex-1">
                <FooterColumn title={col.title} links={col.links} />
              </div>
            ))}
          </div>
        </div>

        <hr className="border-grey-500 my-2" />

        {/* Bottom */}
        <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-4">
          <p className="text-body-sm text-text-dark-secondary">
            @2023 VideoBelajar. All Rights Reserved.
          </p>
          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </footer>
  );
}
