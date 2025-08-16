import Card from './UI/Card';
import Button from './UI/Button';

/**
 * Pricing tiers
 */
export default function Pricing({ data }) {
  return (
    <section id={data.id} className="py-20 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">{data.title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {data.tiers.map((tier) => (
            <Card key={tier.name} className={tier.recommended ? 'border-accent' : ''}>
              <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold mb-4">{tier.price}</div>
              <ul className="mb-4 space-y-1 text-sm">
                {tier.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <Button variant={tier.recommended ? 'pill_accent' : 'pill_ghost'}>{tier.cta}</Button>
            </Card>
          ))}
        </div>
        <p className="text-xs text-center mt-4 text-muted">{data.notes}</p>
      </div>
    </section>
  );
}
