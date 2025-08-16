import { cn } from '../../lib/cn';

/**
 * Generic Card container
 */
export default function Card({ children, className }) {
  return (
    <div className={cn('bg-card border border-border rounded-xl p-6 hover:shadow-accent transition', className)}>
      {children}
    </div>
  );
}
