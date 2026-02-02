import { motion } from "framer-motion";

const skills = [
  "React", "JavaScript", "Python", "ML",
  "TensorFlow", "OpenCV", "MySQL", "Git"
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-16 neon
                       text-slate-900 dark:text-white">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -20, scale: 1.2 }}
              className="w-32 h-32 rounded-full
                         bg-gradient-to-br from-indigo-500
                         to-purple-600
                         flex items-center justify-center
                         text-white font-bold shadow-2xl
                         shadow-purple-500/40"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
