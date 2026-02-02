import { motion } from "framer-motion";

const timeline = [
  { year: "2019", title: "Started B.Tech" },
  { year: "2023", title: "Graduated" },
  { year: "2023", title: "DRDO Internship" },
  { year: "2024", title: "Software Engineer" }
];

export default function Timeline() {
  return (
    <section className="py-32 px-6">
      <h2 className="text-5xl font-extrabold text-center mb-20 neon">
        Journey
      </h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {timeline.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="glass rounded-2xl p-6"
          >
            <span className="text-indigo-400 font-bold">{t.year}</span>
            <h3 className="text-xl mt-2">{t.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
