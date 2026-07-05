"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import HoverList from "./components/HoverList";

    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import ProductCard from "./components/ProjectCard";
import BrandList from "./components/BrandList";
import StackTicker from "./components/StackTicker";
import { FaLinkedin, FaWhatsapp, FaX, FaXTwitter } from "react-icons/fa6";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother,ScrollToPlugin,SplitText,TextPlugin);
export default function Home() {

    const container = useRef(null);

   

   useGSAP(
    () => {
      const split = new SplitText(".reveal-text", { type: "lines" });

      gsap.from(split.lines, {
        scrollTrigger: {
          trigger: ".reveal-text",
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
        color: "#444", // start color (dim)
        stagger: 0.5,
        ease: "none",
      });

      return () => split.revert();
    },
    { scope: container }
  );

  return (
    <div className="flex flex-col flex-1 items-center gap-[120px] justify-center font-satoshi bg-black ">
      <main className="flex flex-1 h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <h1 className="font-bold md:text-7xl text-4xl text-white mb-6 font-satoshi">Fullstack Engineer <span className="text-grayy">and</span> Product Designer</h1>
        <p className="text-grayy">Lagos, Nigeria.</p>
       
      </main>



     <section className="flex flex-col lg:flex-row items-start w-full gap-16 lg:gap-[100px] px-4 md:px-8 lg:px-16">
        {/* Text + ticker column */}
        <div className="w-full lg:flex-1 lg:max-w-xl">
          <div ref={container} className="mb-8 md:mb-[64px]">
            <p className="reveal-text text-base md:text-lg lg:text-xl text-white font-satoshi font-semibold leading-[1.6]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta obcaecati
              rerum quos quia, aut non recusandae sunt? Maiores, ex mollitia officia,
              animi nisi illum temporibus amet nobis incidunt, eaque libero. Lorem ipsum font-satoshi
              dolor sit amet consectetur adipisicing elit. Soluta obcaecati rerum quos
              quia, aut non recusandae sunt? Maiores, ex mollitia officia, animi nisi
              illum temporibus amet nobis incidunt, eaque libero.
            </p>
          </div>
          <StackTicker />
        </div>

        {/* Image column */}
        <div className="relative w-full lg:flex-1 aspect-[3/4] lg:aspect-auto lg:h-auto lg:min-h-[800px] lg:self-stretch">
          <Image
            src="/edited_me.png"
            alt="me"
            fill
            quality={100}
            priority
            className="object-cover object-top [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          
        </div>
      </section>



      <section className="px-4 md:px-8 lg:px-16  w-full">

        
        <BrandList />

      </section>




      
    </div>
  );
}




/*

<section className="flex flex-col justify-center h-[100vh] w-full py-4 md:py-8 lg:py-16 px-4 md:px-8 lg:px-16 text-left">
        <div className="">
          <h1 className="md:text-5xl text-3xl font-bold text-white mb-[84px] "><span className="text-grayy font-satoshi">Let's</span> Connect</h1>
          <p className="text-grayy max-w-2xl font-medium text-[18px] mb-[24px]  md:text-[24px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit totam magnam quibusdam, accusamus esse amet</p>
          <div className="flex-col md:flex">
            <button className="px-8 py-4  w-full cursor-pointer  hover:text-[#25D366] bg-[#434343] text-white flex gap-4 font-medium items-center text-[24px]"><FaWhatsapp className="" /> Whatsapp</button>
            <button className="px-8 py-4 w-full cursor-pointer  hover:text-black bg-[#575757] text-white flex gap-4 font-medium items-center text-[24px]"><FaXTwitter className="" /> Twitter</button>
            <button className="px-8 py-4  w-full cursor-pointer hover:text-[#0A66C2] bg-[#a5a5a5] text-white flex gap-4 font-medium items-center text-[24px]"><FaLinkedin className="" /> LinkedIn</button>
          </div>
          </div>
      </section>


      */