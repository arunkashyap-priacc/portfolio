import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-20 w-full">

        {/* LEFT – TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* NAME */}
          <p className="text-sm uppercase tracking-[0.35em]
                        text-indigo-500 mb-6">
            Priyanka Singh
          </p>

          {/* ROLE */}
          <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.05]
                         text-slate-900 dark:text-white">
            Software <br />
            Engineer & <br />
            React Developer
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg leading-relaxed max-w-md
                        text-slate-600 dark:text-gray-400">
            I design and build modern, scalable web applications
            using React, JavaScript, Python and Machine Learning,
            with a strong focus on clean UI and performance.
          </p>

          {/* CTA */}
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="inline-block mt-12 px-8 py-4
                       rounded-full border border-slate-300
                       dark:border-slate-700
                       text-slate-900 dark:text-white
                       hover:border-indigo-500
                       transition"
          >
            Explore My Work →
          </motion.a>

          {/* SCROLL HINT */}
          <div className="mt-16 flex items-center gap-3
                          text-xs uppercase tracking-widest
                          text-slate-400">
            <span className="w-12 h-px bg-slate-300 dark:bg-slate-600" />
            Scroll
          </div>
        </motion.div>

        {/* RIGHT – VISUAL (CLEAN, NO BLUR) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <div
            className="w-80 h-[420px] rounded-3xl
                       bg-gradient-to-br from-indigo-500/10
                       to-purple-500/10
                       border border-slate-200
                       dark:border-white/10"
          />
        </motion.div>

      </div>
    </section>
  );
}
