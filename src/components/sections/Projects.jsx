"use client";

import React from "react";

const projects = [
    {
        title: "Employee Management System (EMS)",
        subtitle: "ASP.NET Core REST API",
        description:
            "Built a full-stack employee management system to streamline employee records, role management, and operational workflows.",
        tags: ["C#", "ASP.NET Core", "EF Core", "PostgreSQL", "JWT", "Swagger"],
        highlights: [
            "Built robust RESTful APIs with Entity Framework Core for data modeling and migrations.",
            "Implemented secure JWT authentication and Role-Based Access Control (RBAC).",
            "Tested APIs with Postman and Swagger, then integrated backend services with front-end components.",
        ],
    },
    {
        title: "Final Year Defense Project",
        subtitle: "WorkMate",
        period: "Sept 2025 – June 2026",
        description:
            "Built a React Native mobile application for short-term jobs and micro-task management.",
        tags: ["React Native", "Firebase", "Cloud Functions", "Agile"],
        highlights: [
            "Used Firebase Firestore, Auth, Cloud Functions, and Cloud Messaging.",
            "Implemented secure login, real-time communication, task tracking, and Agile (Scrum) workflows.",
        ],
    },
    {
        title: "AI Grading Web Application",
        subtitle: "MorkNHire",
        description:
            "Built an AI-powered grading web application using MongoDB, Ollama (LLaMA 3), and Whisper.",
        tags: ["React", "MongoDB", "Ollama (LLaMA 3)", "Whisper API"],
        highlights: [
            "Integrated Ollama (LLaMA 3) for automated answer evaluation and intelligent grading.",
            "Implemented Whisper for speech-to-text and text-to-speech functionality.",
        ],
    },
    {
        title: "Medical Billing Web Application",
        subtitle: "OSOZ MBS",
        description:
            "Built a professional client-facing healthcare billing platform designed to showcase services and generate leads.",
        tags: ["Next.Js", "Tailwind CSS", "UI/UX", "Responsive Design"],
        highlights: [
            "Developed user-friendly interfaces to present medical billing solutions.",
            "Optimized the website for client engagement and lead generation.",
        ],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((proj, idx) => (
                    <div
                        key={idx}
                        className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between"
                    >
                        <div>
                            <span className="text-[10px] font-bold text-violet-600 uppercase tracking-wider">
                                {proj.subtitle}
                            </span>
                            <h3 className="text-lg font-bold text-slate-900 mt-1">
                                {proj.title}
                            </h3>
                            {proj.period && (
                                <p className="text-[11px] text-slate-400 mb-2">{proj.period}</p>
                            )}
                            <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                                {proj.description}
                            </p>

                            <ul className="mt-4 space-y-1 text-xs text-slate-500 list-disc list-inside">
                                {proj.highlights.map((h, hIdx) => (
                                    <li key={hIdx}>{h}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-slate-100">
                            {proj.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}