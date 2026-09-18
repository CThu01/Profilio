import React, { useState } from "react";
import cv from "../data/cvData";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Experience", "Projects", "Skills", "Contact"];

  return (
    <header className="section-wrap pt-6 md:pt-8 pb-4 md:pb-6">
      <div className="sticky top-3 z-40 mb-8 rounded-2xl border border-white/70 bg-[rgba(255,255,255,0.64)] px-4 py-3 shadow-[0_12px_32px_rgba(16,35,46,0.12)] backdrop-blur-xl md:px-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
              Portfolio
            </p>
            <h1 className="text-lg md:text-xl font-bold text-slate-900">
              {cv.name}
            </h1>
          </div>

          <nav className="hidden sm:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link}
                className="nav-link"
                href={`#${link.toLowerCase()}`}
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="sm:hidden text-sm text-slate-700 flex items-center gap-3">
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg hover:bg-white/80"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d={open ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"}
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${open ? "block" : "hidden"} sm:hidden mt-2 px-2 pb-1 text-sm`}
        >
          <nav className="flex flex-col gap-2 pt-2">
            {links.map((link) => (
              <a
                key={link}
                className="rounded-lg px-3 py-2 hover:bg-white/85"
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              className="rounded-lg px-3 py-2 hover:bg-white/85"
              href={`mailto:${cv.contact.email}`}
              onClick={() => setOpen(false)}
            >
              Email
            </a>
            <a
              className="hover:underline"
              href={cv.contact.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>

      <div className="panel p-7 md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">
          Backend Engineer Candidate
        </p>
        <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
          {cv.name}
        </h2>
        <p className="mt-2 text-lg md:text-xl text-slate-700">{cv.title}</p>

        <p className="mt-6 max-w-3xl leading-relaxed text-slate-700">
          {cv.summary}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a className="btn-primary" href="#projects">
            View Projects
          </a>
          <a className="btn-ghost" href={`mailto:${cv.contact.email}`}>
            Contact Me
          </a>
          <a
            className="btn-ghost"
            href={cv.contact.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
