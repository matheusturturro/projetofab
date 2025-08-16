import Accordion from './UI/Accordion';

/**
 * Frequently asked questions
 */
export default function FAQ({ data }) {
  return (
    <section id={data.id} className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">{data.title}</h2>
        <Accordion items={data.items} />
      </div>
    </section>
  );
}
