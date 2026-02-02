import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

export default function Contact() {
  return (
    <section id="contact" className="py-40 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold mb-16 neon"
      >
        Let’s Work Together
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        <TiltCard>
          <div className="glass rounded-3xl p-12">
            <p className="text-lg text-slate-600 dark:text-gray-300">
              I’m open to full-time roles, freelance projects,
              and exciting collaborations.
            </p>

            <a
              href="mailto:your@email.com"
              className="inline-block mt-10 px-10 py-4
                         rounded-full bg-indigo-500
                         text-white font-semibold
                         hover:scale-105 transition"
            >
              Contact Me
            </a>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
