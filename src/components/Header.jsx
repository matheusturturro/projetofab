import { useState, useEffect } from 'react';
import Button from './UI/Button';
import { cn } from '../lib/cn';

/**
 * Sticky header with nav and CTAs
 */
export default function Header({ data }) {
  const [elevated, setElevated] = useState(false);
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={cn('fixed top-0 w-full z-40 transition', elevated && 'shadow-md bg-bg')}>
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <a href="#" className="font-display font-black text-lg">{data.logo.text}</a>
        <nav className="hidden md:flex gap-6">
          {data.nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex gap-4 items-center">
          {data.right_actions.search && <button aria-label="Buscar">🔍</button>}
          <Button variant={data.right_actions.cta_secondary.variant}>{data.right_actions.cta_secondary.label}</Button>
          <Button variant={data.right_actions.cta_primary.variant}>{data.right_actions.cta_primary.label}</Button>
        </div>
      </div>
    </header>
  );
}
