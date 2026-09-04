"use client";

import React from "react";

export default function About() {
    return (
        <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">About Me</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl">
                    Web Developer with a strong foundation in front-end design and hands-on
                    experience in modern backend application architecture. Proficient in
                    building responsive client-side interfaces using React, Next.js, and
                    modern CSS frameworks, as well as developing robust server-side APIs
                    with C# and ASP.NET Core.
                </p>

                <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-semibold text-slate-800 text-sm mb-2">
                            Technical Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "React.js",
                                "Next.js",
                                "JavaScript",
                                "Tailwind CSS",
                                "Bootstrap",
                                "CSS3",
                                "HTML5",
                                "C#",
                                "ASP.NET Core",
                                "Entity Framework Core",
                                "PostgreSQL",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-800 text-sm mb-2">
                            Soft Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {["Adaptability", "Team Collaboration", "Communication"].map(
                                (skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-medium border border-violet-200"
                                    >
                                        {skill}
                                    </span>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
