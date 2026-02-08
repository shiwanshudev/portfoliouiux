"use client";

import Reveal from "./Reveal";

const experiences = [
    {
        role: "UX/UI Designer",
        company: "Freelance / Self-Employed",
        period: "2024 - Present",
        description:
            "Leading end-to-end product design for diverse clients. Specializing in design systems, high-fidelity prototyping, and bridging the gap between design and frontend implementation.",
        skills: ["Design Systems", "Strategy", "Client Management"],
    },
    {
        role: "Frontend Developer",
        company: "Con10T Labs",
        period: "Dec 2022 – Apr 2024",
        description:
            "Revamped the CAP10 social media app's UI within 4 months, significantly boosting user engagement. Designed and implemented a high-performance admin panel and optimized the company website for better customer experience.",
        skills: ["React", "UI/UX Design", "Performance Optimization"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="mx-auto max-w-4xl px-4 md:px-6 scroll-mt-20">
            <Reveal>
                <div className="mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Work Experience</h2>
                    <p className="mt-4 muted max-w-2xl text-base md:text-lg">
                        A timeline of my professional journey and impact.
                    </p>
                </div>

                <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 md:ml-6 space-y-12 md:space-y-16">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-blue-600 border-4 border-white dark:border-zinc-950" />

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                                <h3 className="text-xl md:text-2xl font-bold tracking-tight">{exp.role}</h3>
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 shrink-0 bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-full">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="text-base md:text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                                {exp.company}
                            </div>

                            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-black/5 dark:bg-white/5 text-gray-600 dark:text-gray-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}
