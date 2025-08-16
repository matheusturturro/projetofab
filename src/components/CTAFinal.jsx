import Button from './UI/Button';

/**
 * Final call to action section
 */
export default function CTAFinal({ data }) {
  return (
    <section id={data.id} className="py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
        <p className="mb-6 text-muted">{data.subtitle}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          {data.ctas.map((cta) => (
            <Button key={cta.label} variant={cta.variant}>
              {cta.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
