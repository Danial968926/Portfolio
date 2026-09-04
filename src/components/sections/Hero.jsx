'use client';

import React from 'react';
import {
  FiArrowRight,
  FiDownload,
  FiLinkedin,
  FiMail,
  FiPhone
} from 'react-icons/fi';

export default function Hero() {
  return (
    <div className="lg:col-span-7 min-w-0 space-y-6">
      {/* Availability Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-200/60">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Available for work
      </div>

      {/* Main Gradient Typography */}
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
        Hi, I&apos;m <br />
        <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-sky-400 bg-clip-text text-transparent">
          M.Danial Mushtaq
        </span>
      </h1>

      <p className="text-sm sm:text-base font-semibold text-violet-600">
        Full Stack Web Developer (Frontend &amp; ASP.NET Core)
      </p>

      {/* Subtitle / Bio */}
      <p className="text-slate-600 max-w-lg text-sm sm:text-base leading-relaxed">
        Web Developer with a strong foundation in front-end design and hands-on experience in modern backend application architecture. Proficient in building responsive client-side interfaces using React, Next.js, and modern CSS frameworks, as well as developing robust server-side APIs with C# and ASP.NET Core.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-slate-900 text-white font-medium text-xs sm:text-sm flex items-center gap-2 hover:bg-slate-800 transition shadow-md hover:shadow-lg"
        >
          View Work <FiArrowRight className="w-4 h-4" />
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View and Print Resume"
          className="px-6 py-3 rounded-full bg-white text-slate-800 font-medium text-xs sm:text-sm border border-slate-200/80 flex items-center gap-2 hover:bg-slate-50 transition shadow-sm"
        >
          Resume <FiDownload className="w-4 h-4 text-slate-500" />
        </a>
      </div>

      {/* Contact & Social Links */}
      <div className="flex items-center gap-4 text-slate-400 pt-4">
        <a href="https://www.linkedin.com/in/muhammad-danial-mushtaq-547325411" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-slate-800 transition-colors">
          <FiLinkedin className="w-5 h-5" />
        </a>
        <a href="mailto:mdanialmushtaq301@gmail.com" aria-label="Email" className="hover:text-slate-800 transition-colors">
          <FiMail className="w-5 h-5" />
        </a>
        <a href="tel:03188387510" aria-label="Phone" className="hover:text-slate-800 transition-colors">
          <FiPhone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}