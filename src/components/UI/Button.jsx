import { cn } from '../../lib/cn';

/**
 * Button component
 * @param {string} variant visual style
 * @param {React.ReactNode} children button label
 */
export default function Button({ variant = 'pill_accent', children, ...props }) {
  const base = 'inline-flex items-center justify-center px-6 py-2 rounded-full font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent';
  const variants = {
    pill_accent: 'bg-accent text-white shadow-accent',
    pill_ghost: 'bg-transparent border border-accent text-accent',
    ghost: 'bg-transparent border border-border text-text',
  };
  return (
    <button className={cn(base, variants[variant])} {...props}>
      {children}
    </button>
  );
}
