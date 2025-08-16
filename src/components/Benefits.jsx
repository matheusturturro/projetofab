import Card from './UI/Card';
import NeuralLines from './UI/NeuralLines';

/**
 * Benefits cards section
 */
export default function Benefits({ data }) {
  return (
    <section id={data.id} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">{data.title}</h2>
        <div className="grid md:grid-cols-3 gap-6 relative">
          {data.cards.map((card) => (
            <Card key={card.title} className="relative overflow-hidden">
              <NeuralLines />
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-muted text-sm">{card.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
