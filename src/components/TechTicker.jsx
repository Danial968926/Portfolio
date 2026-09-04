'use client';

import React from 'react';
import {
    FaCode,
    FaServer,
    FaDatabase,
    FaWind,
    FaCube,
    FaWandMagicSparkles
} from "react-icons/fa6";

const techStack = [
    { name: "React.js", icon: FaCode, color: "text-blue-600" },
    { name: "Next.js", icon: FaCode, color: "text-slate-700" },
    { name: "JavaScript", icon: FaCode, color: "text-amber-500" },
    { name: "Tailwind CSS", icon: FaWind, color: "text-sky-400" },
    { name: "Bootstrap", icon: FaCube, color: "text-violet-600" },
    { name: "CSS3", icon: FaCode, color: "text-sky-500" },
    { name: "HTML5", icon: FaCode, color: "text-orange-500" },
    { name: "C#", icon: FaCode, color: "text-violet-700" },
    { name: "ASP.NET Core", icon: FaServer, color: "text-indigo-600" },
    { name: "Entity Framework Core", icon: FaDatabase, color: "text-emerald-600" },
    { name: "RESTful APIs", icon: FaServer, color: "text-cyan-600" },
    { name: "JWT Authentication", icon: FaWandMagicSparkles, color: "text-amber-600" },
    { name: "PostgreSQL", icon: FaDatabase, color: "text-blue-400" },
    { name: "Relational Databases", icon: FaDatabase, color: "text-emerald-500" },
    { name: "Firebase", icon: FaCube, color: "text-orange-500" },
    { name: "Git", icon: FaCode, color: "text-red-500" },
    { name: "Swagger", icon: FaCode, color: "text-green-600" },
    { name: "Postman", icon: FaServer, color: "text-orange-600" },
];

export default function TechTicker() {
    return (
        <div className="border-y border-slate-200/60 bg-white/40 backdrop-blur-sm py-4 my-12">
            <div className="mx-auto flex items-center justify-start sm:justify-around gap-8 sm:gap-10 px-4 text-slate-600 text-xs font-medium overflow-x-auto scrollbar-none">
                {techStack.map((tech) => {
                    const Icon = tech.icon;
                    return (
                        <div key={tech.name} className="flex items-center gap-2 shrink-0">
                            <Icon className={`w-5 h-5 ${tech.color}`} />
                            <span>{tech.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}