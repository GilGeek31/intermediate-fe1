import logo from "../../assets/logo-video-belajar.png";
import avatar from "../../assets/Avatar.png";

import { useEffect, useState, useRef } from "react";
import { Menu, X, LogOut } from "lucide-react";

export default function Navbar({ isLogin = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const avatarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setIsAvatarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white border-b border-grey-200 sticky top-0 z-50">
      <div className="w-full md:px-8 xl:px-32 h-16 flex items-center justify-between">
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
              className="text-body-md text-text-dark-primary hover:text-text-dark-secondary"
            >
              Kategori
            </a>
            <div className=" relative" ref={avatarRef}>
              <button
                onClick={() => setIsAvatarOpen((prev) => !prev)}
                aria-label="User Avatar"
              >
                <img
                  src={avatar}
                  alt="User avatar"
                  className="w-9 h-9 rounded-full object-cover cursor-pointer"
                />
              </button>
              {isAvatarOpen && (
                <div
                  className="absolute right-0 top-12 w-40 bg-white border border-grey-200 rounded-md shadow-lg flex flex-col py-2 z-50"
                  role="menu"
                >
                  <a
                    href="#"
                    className="px-4 py-2 text-body-sm hover:bg-grey-50 border-b-1 border-grey-500"
                    role="menuitem"
                  >
                    Profil Saya
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 text-body-sm hover:bg-grey-50 border-b-1 border-grey-500"
                    role="menuitem"
                  >
                    Pengaturan
                  </a>
                  <a
                    href="#"
                    className=" flex gap-2 px-4 py-2 text-body-sm hover:bg-grey-50 text-red-500 border-b-1 border-grey-500"
                    role="menuitem"
                  >
                    Keluar <LogOut size={20} />
                  </a>
                </div>
              )}
            </div>
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
        <nav
          className="md:hidden absolute top-15 
            w-full bg-white flex flex-col pb-4 border-t border-grey-200"
        >
          <a
            href="/kategori"
            className="py-3 pl-3 text-body-md text-text-dark-primary hover:text-text-dark-secondary
              border-1 border-grey-500"
          >
            Kategori
          </a>
          <a
            href="/kategori"
            className="py-3 pl-3 text-body-md text-text-dark-primary hover:text-text-dark-secondary
              border-1 border-grey-500"
          >
            Profil Saya
          </a>
          <a
            href="/kategori"
            className="py-3 pl-3 text-body-md text-text-dark-primary hover:text-text-dark-secondary 
              border-1 border-grey-500"
          >
            Kelas Saya
          </a>
          <a
            href="/kategori"
            className="py-3 pl-3 text-body-md text-text-dark-primary hover:text-text-dark-secondary
              border-1 border-grey-500"
          >
            Pesanan Saya
          </a>
          <a
            href="/kategori"
            className=" flex gap-2 py-3 pl-3 text-body-md text-red-500 hover:text-red-400
              border-1 border-grey-500"
          >
            Keluar <LogOut size={20} />
          </a>
        </nav>
      )}
    </header>
  );
}
