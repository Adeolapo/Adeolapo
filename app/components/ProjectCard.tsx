import Image from "next/image"
import ViewMore from "./viewmore/ViewMore"

const ProductCard = () => {
    return(
        <div className="px-4 md:px-8 lg:px-16">
        <div className="w-full rounded-[32px] px-4 md:px-8 h-[500px] gap-[64px] flex items-center md:flex-row flex-col hover:cursor-[url('/Button.png'),_pointer]  justify-between bg-[#18181B] py-6">

            <div className=" w-[50%] gap-2 mb-10">
                <h1 className="text-2xl font-bold text-white/[0.80] mb-4 ">Product Design</h1>
                <p className="text-grayy max-w-3xl mb-8 leading-[1.6] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, doloribus, quisquam adipisci repellat delectus nam quidem assumenda odio autem velit ipsam! Illo reprehenderit, quam ipsa libero laborum magnam. Cum, asperiores.</p>
                <ViewMore />

            </div>

            <div className="flex-1 aspect-[16/9] h-full relative">
                <Image src="/project/Avex.png" fill alt="me" className="rounded-[32px]"></Image>
            </div>


        </div>
        </div>
    )
}

export default ProductCard