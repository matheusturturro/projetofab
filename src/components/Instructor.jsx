import Button from './UI/Button';

/**
 * Instructor bio section
 */
export default function Instructor({ data }) {
  return (
    <section id={data.id} className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
          <p className="mb-4 text-muted">{data.bio_short}</p>
          <div className="flex gap-4 mb-4 flex-wrap">
            {data.proof.map((p) => (
              <span key={p} className="text-sm text-muted">
                {p}
              </span>
            ))}
          </div>
          <Button variant="pill_ghost">{data.cta.label}</Button>
        </div>
        <div className="rounded-xl bg-bg-alt aspect-square"></div>
      </div>
    </section>
  );
}
