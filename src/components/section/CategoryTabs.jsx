import { useState } from "react";

export default function CategoryTabs({ categories, onChange }) {
  const [active, setActive] = useState(categories[0]);

  const handleClick = (cat) => {
    setActive(cat);
    onChange?.(cat);
  };

  return (
    <div className="flex gap-6 overflow-x-auto pb-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`shrink-0 px-0 py-2 text-body-sm font-semibold transition-colors
            ${
              active === cat
                ? "text-tertiary-100 border-b-4 border-b-amber-800"
                : "text-text-dark-secondary hover:text-tertiary-100"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
