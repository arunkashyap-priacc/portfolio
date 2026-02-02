import TiltCard from "./TiltCard";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold mb-16 neon"
      >
        Education
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        <TiltCard>
          <div className="glass rounded-3xl p-10 text-left">
            <h3 className="text-2xl font-bold">
              B.Tech – Computer Science
            </h3>

            <p className="mt-2 text-indigo-400">
              Dr. A.P.J. Abdul Kalam Technical University
            </p>

            <p className="mt-4 text-slate-600 dark:text-gray-300">
              Focus on software engineering, machine learning,
              and scalable web applications.
            </p>

            <span className="inline-block mt-6 px-6 py-2 rounded-full
                             bg-indigo-500/20 text-indigo-400">
              2019 – 2023
            </span>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
