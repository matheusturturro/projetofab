/**
 * Row of logos to build trust
 */
export default function TrustBar({ logos }) {
  return (
    <div className="w-full bg-bg-alt py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 opacity-70">
        {logos.map((logo) => (
          <span key={logo} className="text-sm">
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}
