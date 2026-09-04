'use client';

import React from 'react';
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiLinkedin,
    FiGithub,
    FiArrowUpRight
} from 'react-icons/fi';

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-slate-200/80 bg-white/60 backdrop-blur-md relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-100">

                    {/* Column 1: Brand & Bio */}
                    <div className="md:col-span-5 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                                DM
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="font-bold text-base tracking-tight text-slate-900">M.Danial Mushtaq</span>
                                <span className="text-[11px] text-slate-400 font-medium">Full Stack Web Developer</span>
                            </div>
                        </div>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm">
                            Crafting modern, responsive, and performance-driven web applications with clean code and intuitive UI design.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="https://www.linkedin.com/in/muhammad-danial-mushtaq-547325411"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                            >
                                <FiLinkedin className="w-4 h-4" />
                            </a>
                            <a
                                href="mailto:mdanialmushtaq301@gmail.com"
                                aria-label="Email"
                                className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
                            >
                                <FiMail className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="md:col-span-3 space-y-3">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Navigation</h4>
                        <ul className="space-y-2 text-xs font-medium text-slate-600">
                            <li><a href="#home" className="hover:text-slate-900 transition-colors inline-block py-0.5">Home</a></li>
                            <li><a href="#about" className="hover:text-slate-900 transition-colors inline-block py-0.5">About Me</a></li>
                            <li><a href="#experience" className="hover:text-slate-900 transition-colors inline-block py-0.5">Experience</a></li>
                            <li><a href="#projects" className="hover:text-slate-900 transition-colors inline-block py-0.5">Projects</a></li>
                            <li><a href="#education" className="hover:text-slate-900 transition-colors inline-block py-0.5">Education</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Direct Contact Information */}
                    <div className="md:col-span-4 space-y-3">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Get in Touch</h4>
                        <ul className="space-y-3 text-xs text-slate-600">
                            <li className="flex items-center gap-3 min-w-0">
                                <FiMail className="w-4 h-4 text-violet-600 shrink-0" />
                                <a href="mailto:mdanialmushtaq301@gmail.com" className="break-all hover:text-slate-900 transition-colors">
                                    mdanialmushtaq301@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiPhone className="w-4 h-4 text-emerald-600 shrink-0" />
                                <a href="tel:03188387510" className="hover:text-slate-900 transition-colors">
                                    0318-8387510
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiMapPin className="w-4 h-4 text-sky-500 shrink-0" />
                                <span>Faisalabad, Pakistan</span>
                            </li>
                        </ul>

                        {/* Quick Resume Link */}
                        <div className="pt-2">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View and Print Resume"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-600 hover:text-violet-800 transition-colors"
                            >
                                Download Resume <FiArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
                    <p>© {new Date().getFullYear()} M.Danial Mushtaq. All rights reserved.</p>
                    <div className="flex items-center gap-2 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span>Open for new opportunities</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}