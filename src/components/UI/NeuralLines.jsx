/**
 * Decorative neural-like lines
 */
export default function NeuralLines() {
  return (
    <svg aria-hidden="true" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="100" x2="100%" y2="0" stroke="var(--color-accent-glow)" strokeWidth="1" />
      <circle cx="50" cy="50" r="6" fill="var(--color-accent)" />
    </svg>
  );
}
