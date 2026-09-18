import { useEffect, useRef, useState } from "react";

export default function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setInView(true);
          if (options && options.once) obs.unobserve(ref.current);
        }
      });
    }, options);

    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, options]);

  return [ref, inView];
}
