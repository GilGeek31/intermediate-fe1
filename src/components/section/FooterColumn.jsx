import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function FooterColumn({ title, links }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 md:border-none py-1 md:py-0">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between w-full md:pointer-events-none
          text-body-md font-semibold text-text-dark-primary"
      >
        {title}
        <ChevronRight
          size={18}
          className={`md:hidden transition-transform ${isOpen ? "rotate-90" : ""}`}
        />
      </button>

      <ul
        className={`flex-col gap-2 mt-3 overflow-hidden transition-all
          ${isOpen ? "flex max-h-96" : "hidden max-h-0"} md:flex md:max-h-none`}
      >
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-body-sm text-text-dark-secondary hover:text-text-dark-disabled"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
