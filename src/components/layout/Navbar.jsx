'use client';

import { FiMoon } from 'react-icons/fi';

export default function Navbar() {
  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-[90%] max-w-4xl bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-full px-3 sm:px-6 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-xs text-slate-700">
          DM
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-bold text-xs sm:text-sm tracking-tight">M.Danial Mushtaq</span>
          <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Portfolio</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
        {['home', 'about', 'experience', 'projects', 'education'].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="relative py-1 capitalize hover:text-slate-900 transition-colors duration-300 group"
          >
            {item === 'about' ? 'About' : item}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full transition-all duration-300 ease-out group-hover:w-full" />
          </a>
        ))}
      </nav>

      <button
        aria-label="Toggle theme"
        className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200/70 border border-slate-200 flex items-center justify-center text-slate-600 transition-colors"
      >
        <FiMoon className="w-4 h-4" />
      </button>
    </header>
  );
}