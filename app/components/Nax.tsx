import Image from "next/image"
import { FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6"

const Nav = () => {
    return(
        <div className="flex justify-between items-start px-4 md:px-6 lg:px-16 sticky top-0 z-50 bg-black/60 backdrop-blur-md  py-6">
            <div className="flex gap-3 items-center"> 
                <div className="w-12 h-12 aspect-auto relative rounded-full">
                    <Image src="/me.jpeg" fill alt="me" className="rounded-full"></Image>
                    <div className="absolute bottom-[2px] right-[2px] flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                    </div>
                    
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-grayy">Adeolapo Joseph</p>
                    <p className=" text-grayy">josephadeolapo@gmail.com</p>
                </div>
            </div>

            <div className="flex flex-col gap-4 ">
                <FaXTwitter className="md:w-6 md:h-6 w-4 h-4 hover:text-white  cursor-pointer text-grayy" />
                <FaLinkedin className="md:w-6 md:h-6 w-4 h-4  hover:text-white  cursor-pointer text-grayy" />
                <FaWhatsapp className="md:w-6 md:h-6 w-4 h-4 hover:text-white cursor-pointer text-grayy" />
            </div>
        </div>
    )
}

export default Nav