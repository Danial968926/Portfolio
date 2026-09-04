'use client';

import React from 'react';

export default function Education() {
    return (
        <section id="education" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Education & Leadership</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Education Card */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Bachelor Degree</span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1">Bachelor of Computer Science</h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">TUF - The University Of Faisalabad</p>
                    <div className="mt-4 inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                        CGPA: 3.0
                    </div>
                </div>

                {/* Extra Curriculars */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                    <span className="text-[10px] font-bold text-violet-600 uppercase tracking-wider">Activities</span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1">Extra Curriculars</h3>
                    <ul className="mt-4 space-y-3 text-xs sm:text-sm text-slate-600">
                        <li>
                            <strong className="text-slate-800">Welfare Society:</strong> Active member involved in community service and social initiatives.
                        </li>
                        <li>
                            <strong className="text-slate-800">E-Gaming Society:</strong> Competitive gaming events, team coordination, and tournaments.
                        </li>
                        <li>
                            <strong className="text-slate-800">Literature Society:</strong> Literary discussions, debates, and event organization.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}