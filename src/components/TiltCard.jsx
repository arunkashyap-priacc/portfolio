import { useRef } from "react";

export default function TiltCard({ children }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();

    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    const rx = -(y / r.height - 0.5) * 14;
    const ry = (x / r.width - 0.5) * 14;

    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.05)`;
  };

  const reset = () => {
    ref.current.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div className="perspective" onMouseMove={onMove} onMouseLeave={reset}>
      <div ref={ref} className="transition-transform duration-300">
        {children}
      </div>
    </div>
  );
}
