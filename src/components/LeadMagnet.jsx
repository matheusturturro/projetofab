import Button from './UI/Button';

/**
 * Lead magnet capture form
 */
export default function LeadMagnet({ data }) {
  return (
    <section id={data.id} className="py-20 bg-bg-alt">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          {data.fields.includes('nome') && (
            <input type="text" placeholder="Seu nome" className="px-4 py-2 rounded-full border border-border bg-card" required />
          )}
          {data.fields.includes('email') && (
            <input type="email" placeholder="Seu email" className="px-4 py-2 rounded-full border border-border bg-card" required />
          )}
          <Button variant="pill_accent">Enviar</Button>
        </form>
        <p className="text-xs text-muted mt-2">{data.privacy_note}</p>
      </div>
    </section>
  );
}
