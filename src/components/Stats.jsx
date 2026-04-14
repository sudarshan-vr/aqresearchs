import { useEffect, useRef, useState } from 'react';
import './Stats.css';

const stats = [
  { value: 50, suffix: '+', label: 'Awards Won' },
  { value: 200, suffix: '+', label: 'Happy Clients' },
  { value: 98, suffix: '%', label: 'Project Success' },
  { value: 15, suffix: '+', label: 'States Served' },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 1600;
        const step = Math.ceil(target / (duration / 16));
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__inner">
        {stats.map((s, i) => (
          <div className="stats__item" key={i}>
            <div className="stats__num">
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <div className="stats__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
