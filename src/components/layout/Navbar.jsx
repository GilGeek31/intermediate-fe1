import logo from "../../assets/logo-video-belajar.png";
import avatar from "../../assets/Avatar.png";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar({ isLogin = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-grey-200 sticky top-0 z-50">
      <div className="w-full md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo Video Belajar"
          className="w-[237px] h-[56px] object-contain"
        />

        {/* Menu Desktop - hanya muncul di md ke atas */}
        {isLogin && (
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="/kategori"
              className="text-body-md text-text-dark-primary hover:text-primary-500"
            >
              Kategori
            </a>
            <img
              src={avatar}
              alt="User avatar"
              className="w-9 h-9 rounded-full object-cover"
            />
          </nav>
        )}

        {/* Hamburger Button - hanya muncul di bawah md */}
        {isLogin && (
          <button
            className="md:hidden text-text-dark-primary px-4"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {isMenuOpen && (
        <nav className="md:hidden flex flex-col gap-1 px-4 pb-4 border-t border-grey-200">
          <a
            href="/kategori"
            className="py-3 text-body-md text-text-dark-primary hover:text-primary-500"
          >
            Kategori
          </a>
          <div className="flex items-center gap-2 py-3">
            <img
              src={avatar}
              alt="User avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-body-md text-text-dark-primary">
              Profil Saya
            </span>
          </div>
        </nav>
      )}
    </header>
  );
}
