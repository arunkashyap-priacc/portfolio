import { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["about", "skills", "experience", "projects", "contact"];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50
                   glass px-10 py-3 rounded-full shadow-lg"
      >
        <div className="flex items-center gap-8 text-sm font-semibold
                        text-slate-900 dark:text-white">
          {links.map(link => (
            <a
              key={link}
              href={`#${link}`}
              className="relative group"
            >
              {link.toUpperCase()}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px]
                               bg-indigo-500 transition-all duration-300
                               group-hover:w-full" />
            </a>
          ))}
          <ThemeToggle />
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-4 left-4 right-4 z-50 glass rounded-2xl px-4 py-3">
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg
                           text-slate-900 dark:text-white">
            Priyanka
          </span>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl text-slate-900 dark:text-white"
            >
              ☰
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex flex-col gap-4"
          >
            {links.map(link => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setOpen(false)}
                className="text-base font-medium
                           text-slate-900 dark:text-white
                           hover:text-indigo-500 transition"
              >
                {link.toUpperCase()}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
}
