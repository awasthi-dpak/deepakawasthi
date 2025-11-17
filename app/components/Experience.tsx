// Experience.jsx
import React from "react";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "TreeLeaf Technology",
      role: "Frontend Developer(React/NextJs)",
      start: "JULY 2025",
      end: "Present",
    }
   
  ];

  return (
    <section
      id="experience"
      className="w-full py-10 bg-linear-to-b from-purple-600/10 to-pink-600/10px-6 md:px-20"
    >
      <h2 className="text-center text-4xl font-bold text-white mb-12">
        Work <span className="text-orange-500">Experience</span>
      </h2>

      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="flex items-start gap-4 bg-gray-800/60 border border-gray-700 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:bg-gray-800 transition-colors"
          >
            <div className="p-3 bg-orange-500/20 rounded-xl border border-orange-500/30">
              <Briefcase className="text-orange-500" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
              <p className="text-gray-300 text-sm">{exp.role}</p>
              <p className="text-gray-400 mt-1 text-sm">
                {exp.start} — {exp.end}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
