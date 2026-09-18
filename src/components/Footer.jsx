import React from "react";

export default function Footer() {
  return (
    <footer className="section-wrap pt-2 pb-8">
      <div className="rounded-2xl border border-white/70 bg-white/65 px-6 py-4 text-sm text-slate-600 backdrop-blur-md">
        <p>
          © {new Date().getFullYear()} SiThu. Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
