import React from "react";
import cv from "../data/cvData";
import useInView from "../hooks/useInView";

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.12, once: true });

  return (
    <section
      ref={ref}
      id="projects"
      className={`section-wrap ${inView ? "animate-fade" : "opacity-0"}`}
    >
      <div className="panel p-7 md:p-9">
        <h2 className="section-title">Projects</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {cv.projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-2xl border border-slate-200/85 bg-white/85 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-700/35 hover:shadow-xl"
            >
              <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-teal-100/70 blur-xl transition-all duration-300 group-hover:scale-125" />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {p.tech.join(" • ")}
                    </p>
                  </div>
                  <div className="text-sm font-semibold text-teal-700">
                    Open
                  </div>
                </div>

                {p.notes && (
                  <ul className="mt-3 text-sm text-slate-700 list-disc list-inside space-y-1">
                    {p.notes.map((n, idx) => (
                      <li key={idx}>{n}</li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((tech) => (
                    <span key={`${p.name}-${tech}`} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
