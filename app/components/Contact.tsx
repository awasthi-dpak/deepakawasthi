import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = React.useState(false);

  const contacts = [
    {
      label: "Email",
      value: "deepakawasthi914@gmail.com",
      icon: Mail,
      href: "mailto:deepakawasthi914@gmail.com",
    },
    {
      label: "Phone",
      value: "+977-9862467827",
      icon: Phone,
      href: "tel:+9779862467827",
    },
    {
      label: "GitHub",
      value: "My profile",
      icon: Github,
      href: "https://github.com/awasthi-dpak",
    },
    {
      label: "LinkedIn",
      value: "My Profile",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/deepak-awasthi-597ba4317/",
    },
  ];

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      e.preventDefault();
      containerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <section id="contact" className="w-full py-50 overflow-hidden bg-linear-to-b from-gray-950 to-gray-900 items-center">
      <div className=" h-[200] max-w-7xl mx-auto px-4 ">
        <div className="text-center mb-1">
          <h2 className="text-5xl font-bold text-white mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feel free to reach out through any of these channels. I am always open to discussing new opportunities and collaborations.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full overflow-x-auto scrollbar-hide"
          onWheel={handleWheel}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* Gradient overlays for visual effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

          {/* Scrollable container */}
          <div className="flex gap-8 px-4 min-w-max"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {contacts.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.a
                  key={i}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-4 px-8 py-5 rounded-xl bg-gray-800/40 backdrop-blur-md shadow-xl border border-gray-700/50 hover:border-orange-500/50 hover:bg-gray-800/60 transition-all duration-300 group min-w-[280px]"
                  whileHover={{ scale: 1.03, y: -2 }}
                >
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-orange-500 group-hover:text-orange-400 transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm font-medium mb-1">{c.label}</span>
                    <span className="text-white text-base font-semibold group-hover:text-orange-400 transition-colors">{c.value}</span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Available for freelance opportunities · Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}