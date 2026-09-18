import { GitFork as Github, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import cv from "../data/cvData";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { label: "Home", to: "/" },
  { label: "CV", to: "/cv" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

function Navigation({ onNavigate }) {
  return navigation.map((item) => (
    <NavLink
      key={item.to}
      to={item.to}
      end={item.to === "/"}
      onClick={onNavigate}
      className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}
    >
      {item.label}
    </NavLink>
  ));
}

export default function SiteLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="no-print sticky top-0 z-50 border-b border-white/[0.07] bg-[#08111f]/85 backdrop-blur-xl">
        <div className="container flex h-[72px] items-center justify-between gap-4">
          <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-300 font-mono text-sm font-bold text-slate-950">ST</span>
            <span>
              <span className="block text-sm font-extrabold tracking-tight text-white">{cv.name}</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">Java backend</span>
            </span>
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex"><Navigation /></nav>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <a className="nav-link" href={cv.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a className="button-primary !px-4 !py-2.5" href={`mailto:${cv.email}`}><Mail size={16} /> Get in touch</a>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button className="nav-link" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="container border-t border-white/[0.07] pb-4 pt-3 md:hidden">
            <nav className="flex flex-col gap-1"><Navigation onNavigate={() => setOpen(false)} /></nav>
          </div>
        )}
      </header>

      {children}

      <footer className="no-print border-t border-white/[0.07] py-8">
        <div className="container flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {cv.name}. Built for Java backend opportunities.</p>
          <div className="flex gap-4">
            <a className="hover:text-cyan-200" href={`mailto:${cv.email}`}>Email</a>
            <a className="hover:text-cyan-200" href={cv.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
