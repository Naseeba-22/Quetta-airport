import {
  useEffect,
  useRef,
  useState,
} from "react";

function AnimatedCounter({
  value,
  suffix = "",
}) {
  const [count, setCount] = useState(0);

  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          !started.current
        ) {
          started.current = true;

          let current = 0;

          const target = Number(value);
          const duration = 1200;
          const stepTime = 30;

          const increment =
            target /
            (duration / stepTime);

          const timer = setInterval(() => {
            current += increment;

            if (current >= target) {
              current = target;
              clearInterval(timer);
            }

            setCount(Math.floor(current));
          }, stepTime);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;