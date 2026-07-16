"use client";

import Reveal from "./Reveal";

const experiences = [
    {
        role: "UX/UI Designer",
        company: "independent",
        period: "2024 — present",
        description:
            "Partnering with businesses end-to-end — UX audits, design systems, and high-fidelity prototyping to drive measurable outcomes.",
    },
    {
        role: "Frontend Developer",
        company: "Con10T Labs",
        period: "Dec 2022 — Apr 2024",
        description:
            "Revamped a social media app's UI within 4 months, boosting user engagement, and built a high-performance admin panel.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="mx-auto max-w-6xl px-4 md:px-6 scroll-mt-24">
            <Reveal>
                <div className="mb-12 md:mb-16">
                    <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-gray-500 mb-3">
                        Experience
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-black dark:text-white">
                        Where the work happened
                    </h2>
                </div>

                <div className="flex flex-col">
                    {experiences.map((exp, index) => (
                        <div 
                            key={index} 
                            className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 py-8 md:py-12 border-t border-black/10 dark:border-white/5 last:border-b"
                        >
                            <div className="md:col-span-1">
                                <span className="text-xs font-mono text-gray-500">
                                    {exp.period}
                                </span>
                            </div>
                            
                            <div className="md:col-span-3 flex flex-col">
                                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-black dark:text-white">
                                    {exp.role}
                                </h3>
                                <div className="text-sm font-medium text-purple-600 dark:text-purple-400 mt-2 mb-4">
                                    {exp.company}
                                </div>
                                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}
