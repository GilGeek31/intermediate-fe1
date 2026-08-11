import { useState } from "react";

export default function CategoryTabs({ categories, onChange }) {
  const [active, setActive] = useState(categories[0]);

  const handleClick = (cat) => {
    setActive(cat);
    onChange?.(cat);
  };

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`shrink-0 px-4 py-2 rounded-full text-body-sm font-semibold transition-colors
            ${
              active === cat
                ? "bg-primary-500 text-white"
                : "bg-grey-100 text-text-dark-secondary hover:bg-grey-200"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
