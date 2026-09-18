import React from "react";
import cv from "../data/cvData";
import useInView from "../hooks/useInView";

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.12, once: true });

  return (
    <section
      ref={ref}
      id="about"
      className={`section-wrap ${inView ? "animate-fade" : "opacity-0"}`}
    >
      <div className="panel p-7 md:p-9">
        <h2 className="section-title">About</h2>
        <p className="mt-4 leading-relaxed text-slate-700">{cv.summary}</p>

        <div className="mt-8">
          <h3 className="text-lg font-bold text-slate-900">Education</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {cv.education.map((ed, idx) => (
              <li
                key={idx}
                className="rounded-xl border border-slate-200/80 bg-white/75 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="font-semibold text-slate-900">{ed.school}</p>
                <p className="mt-1 text-sm text-slate-700">{ed.degree}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-teal-700">
                  {ed.dates}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
