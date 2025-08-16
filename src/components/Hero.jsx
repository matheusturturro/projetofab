import { motion } from 'framer-motion';
import Button from './UI/Button';
import TrustBar from './TrustBar';

/**
 * Hero section with big title and media
 */
export default function Hero({ data }) {
  return (
    <section className="bg-gradient-to-br from-[#0B0F1E] via-[#13204B] to-[#271C56] text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 py-24 px-6">
        <div className="flex-1">
          <motion.h1
            className="text-4xl md:text-6xl font-black leading-tight mb-6"
            whileHover={{ letterSpacing: '-0.5px' }}
          >
            {data.title.text}
          </motion.h1>
          <p className="text-muted mb-6 max-w-xl">{data.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            {data.ctas.map((cta) => (
              <Button key={cta.label} variant={cta.variant}>
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="aspect-[4/3] w-full rounded-xl bg-bg-alt"></div>
        </div>
      </div>
      {data.trust_bar.enabled && <TrustBar logos={data.trust_bar.logos} />}
    </section>
  );
}
