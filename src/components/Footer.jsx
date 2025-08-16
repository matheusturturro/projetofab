/**
 * Footer with columns and social links
 */
export default function Footer({ data }) {
  return (
    <footer className="bg-bg-alt text-muted mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 p-8">
        {Object.entries(data.columns).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold mb-2 text-text">{title}</h4>
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-accent">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 pb-8">
        <div className="flex gap-4">
          {data.social.map((s) => (
            <a key={s} href="#" className="hover:text-accent">
              {s}
            </a>
          ))}
        </div>
        <div className="text-xs text-center space-y-1">
          {data.compliance.map((c, i) => (
            <div key={i}>{c}</div>
          ))}
        </div>
      </div>
    </footer>
  );
}
