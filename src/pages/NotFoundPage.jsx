import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() { return <main className="container grid min-h-[60vh] place-items-center py-20 text-center"><div><p className="eyebrow">404</p><h1 className="mt-3 font-['Space_Grotesk'] text-4xl font-bold text-white">This page does not exist.</h1><Link className="button-primary mt-7" to="/"><ArrowLeft size={17} /> Back home</Link></div></main>; }
