export default function Card({ children, className = "" }) {
  return (
    <div
      className={`w-full overflow-hidden bg-white rounded-2x1 shadow-sm p-4 md:p-8 max-w-[590px] ${className}`}
    >
      {children}
    </div>
  );
}
