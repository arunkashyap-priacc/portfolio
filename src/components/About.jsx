import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold text-center mb-20 neon"
      >
        About Me
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        <TiltCard>
          <div className="glass rounded-3xl p-10">
            <p className="text-lg leading-relaxed text-slate-600 dark:text-gray-300">
              I am a passionate Software Engineer focused on building
              modern, scalable and visually engaging web applications.
              I love combining clean UI, performance, and real-world
              problem solving using React, JavaScript and Python.
            </p>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
