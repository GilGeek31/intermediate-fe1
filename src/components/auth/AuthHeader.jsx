export default function AuthHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-6">
      <h1 className="font-heading text-heading-4 md:text-heading-3 text-text-dark-primary">
        {title}
      </h1>
      <p className="text-body-sm font-normal md:text-body-md text-text-dark-secondary mt-1">
        {subtitle}
      </p>
    </div>
  );
}
