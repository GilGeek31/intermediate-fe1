import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const countries = [
  { code: "+62", name: "Indonesia", flag: "https://flagcdn.com/w40/id.png" },
  { code: "+60", name: "Malaysia", flag: "https://flagcdn.com/w40/my.png" },
  { code: "+65", name: "Singapura", flag: "https://flagcdn.com/w40/sg.png" },
  {
    code: "+1",
    name: "Amerika Serikat",
    flag: "https://flagcdn.com/w40/us.png",
  },
];

export default function CountryCodeSelect({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selected = countries.find((c) => c.code === value) || countries[0];

  // Tutup dropdown kalau klik di luar area
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1 rounded-lg border border-grey-200 bg-grey-50 hover:bg-grey-100 transition-colors overflow-hidden"
      >
        <div className="bg-bg-secondary-60 h-full py-4 px-2">
          <img
            src={selected.flag}
            alt={selected.name}
            className="w-7 h-7 rounded-sm object-cover"
          />
        </div>
        <span className=" bg-white py-4 text-body-md text-text-dark-primary">
          {selected.code}
        </span>
        <ChevronDown
          size={16}
          className={`bg-bg-base text-grey-500 transition-transform pr-1 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-2 w-48 bg-white border border-grey-200 rounded-lg shadow-lg overflow-hidden">
          {countries.map((country) => (
            <li key={country.code}>
              <button
                type="button"
                onClick={() => {
                  onChange(country.code);
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 hover:bg-grey-50 text-left"
              >
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-6 h-4 rounded-sm object-cover"
                />
                <span className="text-body-sm text-text-dark-primary">
                  {country.name}
                </span>
                <span className="text-body-sm text-text-dark-secondary ml-auto">
                  {country.code}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
