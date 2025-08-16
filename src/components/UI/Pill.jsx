import { cn } from '../../lib/cn';

/**
 * Pill component
 */
export default function Pill({ children, className }) {
  return <span className={cn('inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-sm', className)}>{children}</span>;
}
