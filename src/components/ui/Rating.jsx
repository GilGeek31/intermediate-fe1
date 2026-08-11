export default function Rating({
  value,
  count,
  textColor = "text-text-dark-secondary",
}) {
  const rounded = Math.round(value);

  return (
    <div className="flex items-center gap-2">
      <span className="text-warning-default text-sm leading-none">
        {"★".repeat(rounded)}
        <span className="text-grey-300">{"★".repeat(5 - rounded)}</span>
      </span>
      <span className={`text-body-sm underline ${textColor}`}>
        {value} ({count})
      </span>
    </div>
  );
}
