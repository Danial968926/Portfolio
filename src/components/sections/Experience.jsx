"use client";

import React from "react";

const experiences = [
    {
        role: "Frontend Web Developer",
        company: "Aiksol Technologies",
        location: "Faisalabad, Pakistan",
        period: "July 2024 - Present | 10-12 Months",
        points: [
            "Developed responsive and user-friendly web interfaces using HTML, CSS, JavaScript, React, Next.js, and modern UI frameworks.",
            "Built and deployed a medical billing platform (OSOZ MBS) featuring clean UI architecture, modular components, and optimized client workflows.",
            "Designed and implemented an AI-powered grading platform (MorkNHire) with interactive candidate dashboards and real-time user feedback.",
            "Integrated front-end components with back-end APIs and ensured cross-browser compatibility.",
            "Collaborated with designers and developers to translate UI/UX designs into functional web pages.",
        ],
    },
    {
        role: "Backend Developer (Project-based / Intern)",
        company: "Aiksol Technologies",
        location: "Faisalabad, Pakistan",
        period: "2 to 4 Months",
        points: [
            "Developed a complete Employee Management System (EMS) to streamline employee records, role management, and operational workflows.",
            "Designed and integrated RESTful APIs using C# and ASP.NET Core framework.",
            "Implemented Entity Framework Core for data modeling, database migrations, and efficient query execution.",
            "Handled JWT authentication, user authorization, and end-to-end API testing using Swagger and Postman.",
            "Connected client-side interfaces with backend services to build reliable full-stack features.",
        ],
    },
    {
        role: "SEO & Digital Outreach",
        company: "Freelance / Collaborative Projects",
        location: "Remote",
        period: "2025 – Present",
        points: [
            "Collaborated with peers on SEO strategy development, keyword research, and on-page optimization.",
            "Successfully acquired two clients through outreach, pitching, and portfolio presentation.",
            "Assisted in improving website visibility, search rankings, and organic traffic growth.",
            "Coordinated with clients to understand business goals and align SEO efforts accordingly.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Work Experience
            </h2>
            <div className="space-y-6">
                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                                <p className="text-xs font-semibold text-violet-600">
                                    {exp.company} • {exp.location}
                                </p>
                            </div>
                            <span className="text-xs text-slate-400 font-medium mt-2 sm:mt-0">
                                {exp.period}
                            </span>
                        </div>
                        <ul className="list-disc list-inside space-y-1.5 text-slate-600 text-xs sm:text-sm">
                            {exp.points.map((point, pIdx) => (
                                <li key={pIdx}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
