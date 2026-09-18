import React from "react";
import cv from "../data/cvData";
import useInView from "../hooks/useInView";

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.12, once: true });

  return (
    <section
      ref={ref}
      id="experience"
      className={`section-wrap ${inView ? "animate-fade" : "opacity-0"}`}
    >
      <div className="panel p-7 md:p-9">
        <h2 className="section-title">Experience</h2>
        <div className="mt-6 space-y-4">
          {cv.experience.map((exp, i) => (
            <article
              key={i}
              className="relative overflow-hidden rounded-2xl border border-slate-200/85 bg-white/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-700/35 hover:shadow-lg"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-teal-500 to-amber-500" />
              <div className="pl-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-slate-600">{exp.company}</p>
                  </div>
                  <div className="chip">{exp.dates}</div>
                </div>

                {exp.details && exp.details.length > 0 ? (
                  <ul className="mt-3 list-disc list-inside text-sm text-slate-700">
                    {exp.details.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm text-slate-500">
                    Operational reliability, incident handling, and cross-team
                    support delivery.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
