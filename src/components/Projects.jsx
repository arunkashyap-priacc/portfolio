import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const projects = [
  {
    title: "ERP Management System",
    desc: "Enterprise-level ERP system with role-based access, dashboards and real-time data handling.",
    tech: ["React", "Node", "MySQL"],
  },
  {
    title: "Speech Emotion Recognition",
    desc: "ML-based system to detect emotions from speech using deep learning models.",
    tech: ["Python", "ML", "TensorFlow"],
  },
  {
    title: "YOLO Object Detection",
    desc: "Real-time object detection system using YOLOv4 with improved accuracy.",
    tech: ["Python", "OpenCV", "YOLO"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-center mb-20 neon
                     text-slate-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <TiltCard>
                <div
                  className="glass rounded-3xl p-8 h-full
                             border border-white/20
                             hover:border-indigo-400/60
                             transition-all duration-300"
                >
                  {/* Gradient line */}
                  <div className="h-1 w-16 rounded-full
                                  bg-gradient-to-r from-indigo-500 to-purple-500 mb-6" />

                  {/* Title */}
                  <h3 className="text-2xl font-bold
                                 text-slate-900 dark:text-white">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-slate-600 dark:text-gray-300 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-sm
                                   bg-indigo-500/15 text-indigo-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex items-center gap-4">
                    <button
                      className="px-5 py-2 rounded-full text-sm font-medium
                                 bg-indigo-500 text-white
                                 hover:scale-105 transition"
                    >
                      View Project
                    </button>

                    <span className="text-sm text-slate-500 dark:text-gray-400">
                      Case Study →
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
