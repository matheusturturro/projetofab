import Card from './UI/Card';

/**
 * Offer includes and bonuses
 */
export default function Offer({ data }) {
  return (
    <section id={data.id} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">{data.title}</h2>
        <ul className="grid md:grid-cols-2 gap-4 mb-8">
          {data.includes.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-accent">✔</span> {item}
            </li>
          ))}
        </ul>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {data.bonuses.map((b) => (
            <Card key={b.name}>
              <h3 className="font-semibold">{b.name}</h3>
              <p className="text-sm text-muted">{b.value_anchor}</p>
            </Card>
          ))}
        </div>
        <p className="text-sm text-center">{data.guarantee}</p>
      </div>
    </section>
  );
}
