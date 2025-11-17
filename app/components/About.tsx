import Image from "next/image";

const About = () => (
    <section id="about" className="py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400">
            About Me
          </h2>
          <div className="space-y-2 text-gray-300 text-lg leading-relaxed">
            <p className="text-xl">Proficient in Frontend Web development with expertise in JavaScript, TypeScript, React, Next.js, Node.js, Express.js and modern web technologies.</p>
            <p className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-100 via-pink-200 to-blue-400 animate-gradient">Bachelor of Engineering in Computer Engineering </p>
            <p className="text-md font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-100 via-pink-200 to-blue-400 animate-gradient">Nepal College of Information Technology, Pokhara University</p>
            <p className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-100 via-pink-200 to-blue-400 animate-gradient">Passed Year 2024</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute h-[300px] w-[300px] inset-0 bg-linear-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />
            <div className="relative h-[300px] w-[300px] bg-linear-to-br from-purple-600/10 to-pink-600/10 rounded-3xl backdrop-blur-sm border border-purple-500/30 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-3"></div>
                <p className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-400">
                      <Image
                        src="/hero.png"
                        alt="Fill layout image"
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="100vw"
                      />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default About;