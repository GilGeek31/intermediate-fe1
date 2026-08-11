export default function Divider({ text }) {
  return (
    <div className="flex items-center gap-3 my-2">
      <div className="flex-1 h-px bg-grey-200" />
      {text && <span className="text-body-sm text-text-dark-secondary">{text}</span>}
      <div className="flex-1 h-px bg-grey-200" />
    </div>
  )
}