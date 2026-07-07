import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const Nav = () => {
  return (
    // Changed div to nav for better accessibility/SEO
    <nav className=" px-4 md:px-8 lg:px-16  sticky top-0 z-50 bg-black/60 backdrop-blur-md py-6">
        <div className="max-w-[1600px] m-auto flex justify-between items-start ">
      <div className="flex gap-3 items-center">
        <div className="w-12 h-12 relative rounded-full">
          {/* Added object-cover and made tag self-closing */}
          <Image
            src="/me.jpeg"
            fill
            alt="Adeolapo Joseph"
            className="rounded-full object-cover"
          />
          <div className="absolute bottom-[2px] right-[2px] flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </div>
        </div>
        
        <div className="flex flex-col gap-1">
          <p className="text-grayy">Adeolapo Joseph</p>
          {/* Optional: Add a smaller text size on mobile for the email so it doesn't wrap awkwardly */}
          <p className="text-grayy text-sm md:text-base">josephadeolapo@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Replace the hrefs below with your actual links */}
        <Link href="https://x.com/v_veratti" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="md:w-6 md:h-6 w-4 h-4 hover:text-white cursor-pointer text-grayy transition-colors duration-200" />
        </Link>
        
        <Link href="https://www.linkedin.com/in/adeolapo-joseph-5b0424273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="md:w-6 md:h-6 w-4 h-4 hover:text-white cursor-pointer text-grayy transition-colors duration-200" />
        </Link>

        {/* Your custom WhatsApp Link (Don't forget to insert your actual number) */}
        <Link 
          href="https://wa.me/2348051729362?text=hi%20i%20would%20like%20to%20make%20some%20enquiries" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="md:w-6 md:h-6 w-4 h-4 hover:text-white cursor-pointer text-grayy transition-colors duration-200" />
        </Link>
      </div>
      </div>
    </nav>
  );
};

export default Nav;