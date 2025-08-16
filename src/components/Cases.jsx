import Card from './UI/Card';

/**
 * Carousel of case cards
 */
export default function Cases({ data }) {
  return (
    <section id={data.id} className="py-20 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">{data.title}</h2>
        <div className="flex overflow-x-auto gap-4 snap-x">
          {data.cards.map((c, i) => (
            <Card key={i} className="min-w-[250px] snap-center">
              <div className="text-sm text-muted">{c.niche}</div>
              <div className="font-bold">
                {c.before} → {c.after}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
