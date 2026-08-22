export default function Button({
  children,
  color = "primary", // "primary" | "secondary" | "disabled"
  variant = "solid", // "solid" | "soft" | "outline"
  onClick,
  disabled,
  className = "",
  type = "button",
}) {
  const baseStyle =
    "px-6 py-3 rounded-lg font-semibold text-body-md transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed";

  const styles = {
    primary: {
      solid: "bg-primary-100 hover:bg-primary-300 text-text-light-primary",
      soft: "bg-green-50 hover:bg-green-100 text-green-500",
      outline:
        "border border-green-500 hover:bg-green-50 text-green-500 bg-white",
    },
    secondary: {
      solid: "bg-orange-500 hover:bg-orange-600 text-white",
      soft: "bg-orange-50 hover:bg-orange-100 text-orange-500",
      outline:
        "border border-orange-500 hover:bg-orange-50 text-orange-500 bg-white",
    },
    disabled: {
      solid: "bg-gray-300 text-white cursor-not-allowed",
      soft: "bg-gray-100 text-gray-500 cursor-not-allowed",
      outline:
        "border border-gray-300 text-gray-500 bg-gray-100 cursor-not-allowed",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || color === "disabled"}
      className={`${baseStyle} ${styles[color][variant]} ${className}`}
    >
      {children}
    </button>
  );
}
