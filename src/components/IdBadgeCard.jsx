'use client';

import React from 'react';

export default function IdBadgeCard() {
  return (
    <div className="lg:col-span-5 min-w-0 flex flex-col items-center justify-center w-full max-w-md lg:max-w-none mx-auto lg:mx-0 relative">

      {/* ------------------- MOBILE VIEW (Sleek Horizontal Card) ------------------- */}
      <div className="block lg:hidden w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-slate-200/80 shadow-lg">
        <div className="flex items-center justify-center gap-6 w-full">
          <div className="relative w-20 h-20 rounded-full border-2 border-indigo-500/20 p-0.5 shrink-0 bg-slate-100">
            <img
              src="/images/img1.jpeg"
              alt="M.Danial Mushtaq"
              className="w-full h-full object-cover object-top rounded-full scale-130"
            />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
          </div>

          <div className="flex flex-col items-start justify-center text-left">
            <h3 className="font-bold text-base text-slate-900 truncate">M.Danial Mushtaq</h3>
            <p className="text-xs font-semibold text-indigo-600 truncate mt-0.5">
              Full Stack Web Developer
            </p>
            <p className="text-[11px] text-slate-500 font-medium mt-1">
              Faisalabad, Pakistan • BS CS
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span className="font-semibold text-slate-700">DM-2026-DEV</span>
          <div className="flex items-end gap-1 h-4">
                <div className="w-1 h-2/3 bg-slate-400"></div>
                <div className="w-1 h-full bg-slate-300"></div>
                <div className="w-1 h-1/2 bg-slate-400"></div>
                <div className="w-1 h-3/4 bg-slate-300"></div>
              </div>
          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-sans font-medium text-[10px]">
            React & ASP.NET Core
          </span>
        </div>
      </div>


      {/* ------------------- DESKTOP VIEW (Hanging ID Badge Card) ------------------- */}
      <div className="hidden lg:flex flex-col items-center justify-center">
        {/* Lanyard Clip */}
        <div className="w-4 h-12 bg-slate-700 rounded-sm shadow-md flex flex-col gap-2 items-center justify-center relative z-20">
          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
        </div>

        {/* Badge Container */}
        <div className="w-full max-w-[20.75rem] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative z-10 -mt-2">
          {/* Banner Background */}
          <div className="h-28 bg-gradient-to-tr from-violet-300 via-purple-200 to-indigo-100 relative">
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
              <div className="relative w-24 h-24 rounded-full border-2 border-white shadow-md overflow-hidden bg-slate-200">
                <img
                  src="/images/img1.jpeg"
                  alt="M.Danial Mushtaq"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-12 pb-6 px-6 text-center">
            <h3 className="font-bold text-base text-slate-900">M.Danial Mushtaq</h3>
            <p className="text-[11px] font-medium text-slate-500 mt-0.5">
              Full Stack Web Developer (Frontend &amp; ASP.NET Core)
            </p>

            <hr className="my-4 border-slate-100" />

            {/* Data Grid */}
            <div className="grid grid-cols-2 gap-3 text-left text-[10px]">
              <div className="flex flex-col">
                <span className="text-slate-400 font-semibold tracking-wider block">SPECIALITY</span>
                <span className="font-bold text-slate-800">React, Next.js &amp;</span>
                <span className="font-bold text-slate-800">.NET Core</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold tracking-wider block">LOCATION</span>
                <span className="font-bold text-slate-800">Faisalabad, PK</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold tracking-wider block">DEGREE</span>
                <span className="font-bold text-slate-800">BS Computer Science</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold tracking-wider block">STATUS</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span> Active
                </span>
              </div>
            </div>

            {/* Footer Code Bar */}
            <div className="mt-6 pt-3 border-t-2 border-slate-200 flex items-center justify-between text-[9px] text-slate-400 font-mono">
              <span className="text-[11px] font-semibold text-slate-600">DM-2026-DEV</span>
              <div className="flex items-end gap-1 h-4">
                <div className="w-1 h-full bg-slate-300"></div>
                <div className="w-1 h-2/3 bg-slate-400"></div>
                <div className="w-1 h-full bg-slate-300"></div>
                <div className="w-1 h-1/2 bg-slate-400"></div>
                <div className="w-1 h-3/4 bg-slate-300"></div>
                <div className="w-1 h-full bg-slate-300"></div>
              </div>
              <span className="text-[11px] font-semibold text-slate-600">FULLSTACK PRO</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}