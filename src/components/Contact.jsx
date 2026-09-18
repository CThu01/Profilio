import React, { useState } from "react";
import cv from "../data/cvData";
import useInView from "../hooks/useInView";

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.12, once: true });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio contact from ${name || email}`,
    );
    const body = encodeURIComponent(
      message + "\n\nFrom: " + (name || "") + " <" + (email || "") + ">",
    );
    // Use mailto fallback - opens user's mail client. For EmailJS integration, replace this logic.
    window.location.href = `mailto:${cv.contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      ref={ref}
      id="contact"
      className={`section-wrap ${inView ? "animate-fade" : "opacity-0"}`}
    >
      <div className="panel p-7 md:p-9">
        <h2 className="section-title">Contact</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.35fr]">
          <aside className="rounded-2xl border border-slate-200/80 bg-white/75 p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-teal-700">
              Let&apos;s Connect
            </p>
            <p className="mt-3 text-slate-700">
              Open to backend engineering opportunities and practical team
              projects.
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <p className="text-slate-700">
                Email:{" "}
                <a
                  className="font-semibold text-teal-700 hover:underline"
                  href={`mailto:${cv.contact.email}`}
                >
                  {cv.contact.email}
                </a>
              </p>
              <p className="text-slate-700">Phone: {cv.contact.phone}</p>
              <p className="text-slate-700">
                GitHub:{" "}
                <a
                  className="font-semibold text-teal-700 hover:underline"
                  href={cv.contact.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Profile
                </a>
              </p>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
            <input
              className="field-input"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="field-input"
              placeholder="Your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="field-input h-36 resize-y"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button type="submit" className="btn-primary">
                Send Message
              </button>
              <span className="text-sm text-slate-500">
                Opens your mail client
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
