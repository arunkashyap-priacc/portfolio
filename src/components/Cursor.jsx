import { useEffect, useState } from "react";

export default function Cursor() {
  const [p, setP] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = e => setP({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed w-6 h-6 rounded-full pointer-events-none
                 bg-indigo-500/40 blur-sm z-[9999]"
      style={{ transform: `translate(${p.x - 12}px, ${p.y - 12}px)` }}
    />
  );
}
