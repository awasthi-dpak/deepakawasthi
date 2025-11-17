import React from "react";
import { Sparkles} from "lucide-react";

const Hero = ({ scrollY }: { scrollY: number }) => (
  <section id="home" className="h-[500px] flex items-center justify-center px-8 pt-0">
    <div className="max-w-7xl mx-auto text-center space-y-10">
      <div style={{ transform: `translateY(${scrollY * 0.7}px)` }}>
        <h1 className="text-4xl md:text-7xl font-black bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">
          Deepak Awasthi
        </h1>
      </div>

      <div className="flex items-center justify-center gap-2 md:gap-3">
        <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" style={{ animationDuration: "3s" }} />
        <p className="text-lg md:text-2xl tracking-widest text-gray-300 uppercase font-light">
          Full Stack Developer
        </p>
        <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" style={{ animationDuration: "3s", animationDirection: "reverse" }} />
      </div>

      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Crafting digital experiences from beyond the stars
      </p>

    
    </div>
  </section>
);

export default Hero;
