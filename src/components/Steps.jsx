import { motion } from 'framer-motion';
import Pill from './UI/Pill';

/**
 * Steps section with badges
 */
export default function Steps({ data }) {
  return (
    <section id={data.id} className="py-20 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">{data.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative p-4 border border-border rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Pill>{step.badge}</Pill>
              <h3 className="mt-2 font-semibold">{step.name}</h3>
              <p className="text-sm text-muted">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
