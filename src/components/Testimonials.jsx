import VideoModal from './UI/VideoModal';

/**
 * Testimonials video grid
 */
export default function Testimonials({ data }) {
  return (
    <section id={data.id} className="py-20 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">{data.title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {data.items.map((item, i) => (
            <div key={i} className="text-center">
              <VideoModal src="/video.mp4" poster="/poster.jpg" />
              <p className="mt-2 text-sm text-muted">
                {item.quote} – {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
