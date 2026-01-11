import React from "react";
import { Sparkles} from "lucide-react";

const Hero = () => (
  <section id="home" className="h-[500px] flex items-center justify-center px-8 pt-0">
    <div className="max-w-7xl mx-auto text-center space-y-10">
      <div >
        <h1 className="text-3xl md:text-6xl font-black bg-clip-text text-transparent bg-linear-to-r from-gray-100 via-gray-200 to-gray-300 ">
          Deepak Awasthi
        </h1>
      </div>

      <div className="flex items-center justify-center gap-2 md:gap-3">
        
        <p className="text-lg md:text-2xl tracking-widest text-gray-300 uppercase font-light">
          Full Stack Developer
        </p>
        
      </div>

      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Crafting digital experiences from beyond the stars
      </p>

    
    </div>
  </section>
);

export default Hero;
