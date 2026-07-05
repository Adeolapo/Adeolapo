"use client";

import { BRANDS } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";


const Portfolio = () => {
    const id = useParams<{ id: string}>();
    const currentID = id.id

    const brand = BRANDS.filter((brand)=> brand.name === currentID)[0]

    console.log(brand)
    return(
        <div className="flex flex-col gap-[100px] w-full py-4 md:py-8 lg:py-16 px-4 md:px-8 lg:px-16 text-left">
            <div className="pb">
                <h1 className="md:text-5xl text-3xl font-bold text-white mb-4 ">{brand?.name}</h1>
                <p className="text-grayy font-medium  text-xl">Here are some of my featured projects</p>
            </div>

            <div className="flex flex-col gap-[80px]">
                {brand?.projects?.map((project, index) => (
                    <div className="" key={index}>
                        <Link href={`https://${project.view}`} target="_blank">
                        <div className="relative w-full aspect-[16/9] lg:aspect-[16/9] lg:min-h-[600px] mb-6 overflow-hidden rounded-xl">
                            <Image
                            src={`${project.image}`}
                            alt="image"
                            fill
                        
                            quality={100}
                            priority
                            className="object-cover object-center"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        </Link>
                        <h1 className="text-2xl font-bold text-white mb-4">{project.name}</h1>
                        <p className="text-grayy">{project.description}</p>
                        {project.code && (
                            <p className="text-grayy mt-4">Github Repo: <a href={`${project.code}`} target="_blank" className="text-white underline">{project.code}</a></p>
                        )}
                    </div>
                ))}
                
                
            </div>
        </div>
    )
}



export default Portfolio