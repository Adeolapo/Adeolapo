import { SiGithub, SiReact, SiNextdotjs, SiFigma, SiFramer, SiTailwindcss, SiPython, SiJavascript, SiCss, SiGsap,  } from "react-icons/si";

export default function StackTicker() {
  // 1. Define your stack in an array so it's easy to render twice
   const stack = [
      { name: "React", icon: <SiReact className="w-4 h-4 text-black" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-black" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="w-4 h-4 text-black" /> },
      { name: "Python", icon: <SiPython className="w-4 h-4 text-black" /> },
      { name: "Figma", icon: <SiFigma className="w-4 h-4 text-black" /> },
      { name: "GitHub", icon: <SiGithub className="w-4 h-4 text-black" /> },
      { name: "Framer", icon: <SiFramer className="w-4 h-4 text-black" /> },
      { name: "Javascript", icon: <SiJavascript className="w-4 h-4 text-black" /> },
      { name: "CSS", icon: <SiCss className="w-4 h-4 text-black" /> },
      { name: "Gsap", icon: <SiGsap className="w-4 h-4 text-black" /> },
    ];

  return (
    // overflow-hidden prevents the screen from scrolling horizontally
    <div className=" max-w-xl overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] ">
      
      {/* The Wrapper that actually moves. It contains BOTH sets of logos */}
      <div className="flex animate-marquee whitespace-nowrap">
        
        {/* === First Set of Logos === */}
        <div className="flex gap-10 mr-10 items-center justify-around ">
          {stack.map((tech, index) => (
            <div 
              key={index} 
              className="text-zinc-600 hover:text-white transition-colors bg-white p-4 rounded-lg duration-300 cursor-pointer"
            >
              {tech.icon}
            </div>
          ))}
        </div>

        {/* === Second Set (The Seamless Clone) === */}
        <div className="flex gap-10  items-center justify-around ">
          {stack.map((tech, index) => (
            <div 
              key={`clone-${index}`} 
              className="text-zinc-600 hover:text-white  bg-white p-4 rounded-lg transition-colors duration-300 cursor-pointer"
            >
              {tech.icon}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}