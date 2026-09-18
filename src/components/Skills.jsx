import React from "react";
import cv from "../data/cvData";
import useInView from "../hooks/useInView";

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.12, once: true });

  return (
    <section
      id="skills"
      ref={ref}
      className={`section-wrap ${inView ? "animate-fade" : "opacity-0"}`}
    >
      <div className="panel p-7 md:p-9">
        <h2 className="section-title">Skills</h2>
        <p className="mt-3 text-slate-600">
          Core tools and technologies used across backend and infrastructure
          projects.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {cv.skills.map((s, i) => (
            <span key={i} className="chip">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
