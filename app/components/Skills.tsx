import React, { useState, useEffect } from "react";

interface Skill {
  name: string;
  level: "Advanced" | "Intermediate" | "Beginner" |"Experienced" | string;
  percentage: number;
}

const skills = [
  { name: "React", level: "Experienced", percentage: 70 },
  { name: "Next.js", level: "Experienced", percentage: 70 },
  { name: "Node.js", level: "Intermediate", percentage: 60 },
  { name: "TypeScript", level: "Intermediate", percentage: 60 },
  { name: "Javascript", level: "Intermediate", percentage: 70 },
  { name: "MongoDB", level: "Experienced", percentage: 80 },
  { name: "AWS", level: "Beginner", percentage: 45 },
  { name: "Docker", level: "Intermediate", percentage: 55 },
];

const getLevelColor = (level:string) => {
  switch(level) {
    case "Advanced": return "from-green-500 to-emerald-500";
    case "Intermediate": return "from-blue-500 to-cyan-500";
    case "Beginner": return "from-yellow-500 to-orange-500";
    case "Experienced": return "from-purple-500 to-cyan-500";

    default: return "from-purple-500 to-pink-500";
  }
};

interface SkillCardProps{
    skill:Skill,
    index:number
}

const SkillCard: React.FC<SkillCardProps>=({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    if (isVisible) {
      const duration = 1500;
      const steps = 60;
      const stepValue = skill.percentage / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        setProgress(Math.min(currentStep * stepValue, skill.percentage));
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }
  }, [isVisible, skill.percentage]);

  return (
    <div
      className={`p-6 bg-linear-to-br from-purple-600/10 to-pink-600/10 rounded-2xl backdrop-blur-sm border border-purple-500/30 hover:scale-105 transition-all duration-300 text-center transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transition: 'all 0.6s ease-out' }}
    >
      <p className="text-xl font-bold text-white mb-3">{skill.name}</p>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-6">
          <span className="text-md px-3 py-2 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
            {skill.level}
          </span>
          <span className="text-sm font-semibold text-white">
            {Math.round(progress)}%
          </span>
        </div>
        
        <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden ">
          <div
            className={`h-full bg-linear-to-r ${getLevelColor(skill.level)} transition-all duration-300 ease-out rounded-full relative`}
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </div>
        </div>
      </div>

    </div>
  );
};

const Skills = () => (
  <section id="skills" className="px-6 md:px-8 py-16 md:py-24 bg-black">
    <div className="max-w-8xl mx-auto text-center">
      <h2 className="text-5xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400">
        Skills & Tech
      </h2>
      <p className="text-gray-400 mb-12 text-lg">
        My expertise across different technologies
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <SkillCard key={i} skill={skill} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;