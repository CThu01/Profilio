export default function SectionHeading({ eyebrow, title, children }) {
  return <div>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 className="section-title mt-3">{title}</h2>{children && <div className="section-copy">{children}</div>}</div>;
}
