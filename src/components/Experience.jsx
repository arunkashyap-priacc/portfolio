import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const experience = [
  {
    role: "Application Engineer",
    company: "WPG India",
    desc: "Worked on embedded systems, debugging, unit testing and hardware validation."
  },
  {
    role: "Software Engineer Intern",
    company: "DRDO",
    desc: "Developed YOLO-based object detection models with improved accuracy."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold text-center mb-20 neon"
      >
        Experience
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-12">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 ? 80 : -80 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <TiltCard>
              <div className="glass rounded-3xl p-8">
                <h3 className="text-2xl font-bold">
                  {exp.role}
                </h3>
                <p className="text-indigo-400 mt-1">
                  {exp.company}
                </p>
                <p className="mt-4 text-slate-600 dark:text-gray-300">
                  {exp.desc}
                </p>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
