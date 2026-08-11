export default function AuthHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-6">
      <h1 className="text-h4 text-text-dark-primary">{title}</h1>
      <p className="text-body-md text-text-dark-secondary mt-1">{subtitle}</p>
    </div>
  )
}