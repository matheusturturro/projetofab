import Accordion from './UI/Accordion';

/**
 * Program modules with metrics sidebar
 */
export default function Program({ data }) {
  return (
    <section id={data.id} className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
          <Accordion items={data.modules} />
        </div>
        <aside className="space-y-4">
          {data.sidebar.metrics.map((m) => (
            <div key={m.label}>
              <div className="text-2xl font-bold text-accent">{m.value}</div>
              <div className="text-sm text-muted">{m.label}</div>
            </div>
          ))}
          {data.sidebar.download_syllabus && (
            <a href="#" className="underline">
              Baixar syllabus
            </a>
          )}
        </aside>
      </div>
    </section>
  );
}
