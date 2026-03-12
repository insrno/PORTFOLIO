import { useEffect, useRef, useState } from 'react';

/**
 * Reveal – wraps children and animates them in when they enter the viewport.
 * direction: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'
 * delay: number in ms (stagger cards by passing 100, 200, 300 …)
 */
export default function Reveal({ children, className = '', direction = 'up', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => setVisible(true), delay);
          observer.disconnect();
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const initial = {
    up: 'opacity-0 translate-y-8',
    down: 'opacity-0 -translate-y-8',
    left: 'opacity-0 -translate-x-8',
    right: 'opacity-0 translate-x-8',
    scale: 'opacity-0 scale-90',
    fade: 'opacity-0',
  }[direction] ?? 'opacity-0 translate-y-8';

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${className} ${
        visible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : initial
      }`}
    >
      {children}
    </div>
  );
}
