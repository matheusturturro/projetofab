import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Video thumbnail that opens modal player
 */
export default function VideoModal({ src, poster }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="focus:outline-none">
        <img src={poster} alt="" loading="lazy" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-11/12 md:w-2/3">
              <button aria-label="Fechar" onClick={() => setOpen(false)} className="absolute top-2 right-2 text-white">
                ×
              </button>
              <video src={src} controls autoPlay muted className="w-full h-auto rounded-xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
