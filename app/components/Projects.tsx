const projectData = [
  {
    icon: "💫",
    title: "1+ Year Experience",
    description: "Worked on multiple React and Next.js projects.",
  },
  {
    icon: "🚀",
    title: "4+ Projects",
    description: "Contributed to 4+ open source projects.",
  },
  {
    icon: "⚡",
    title: "10+ Techlogies",
    description: "Proficient in over 10 web development technologies.",
  },
];

const Projects = () => (
  <section id="projects" className="px-6 md:px-8 py-16">
    <div className="max-w-7xl mx-auto text-center">
      <div className="grid md:grid-cols-3 gap-6">
        {projectData.map((project, i) => (
          <div
            key={i}
            className="group relative aspect-video bg-linear-to-br from-purple-600/10 to-pink-600/10 rounded-2xl backdrop-blur-sm border border-purple-500/30 overflow-hidden hover:scale-105 transition-all hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <div className="absolute inset-0 bg-linear-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all" />
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-3">{project.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
