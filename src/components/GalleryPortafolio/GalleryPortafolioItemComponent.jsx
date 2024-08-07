import images from "../../images.jsx";
import {motion} from "framer-motion";
import {MdArrowOutward} from "react-icons/md";

const GalleryPortafolioItemComponent = ({title,extract,img,url}) =>{
    const Url = ({url}) =>{
        return (
            <a href={url}
                className="bg-white text-pllx-gray-dark flex h-12 w-12 rounded-full justify-center items-center border-solid border-pllx-gray-light border-8">
                                    <MdArrowOutward size={24}/>
                                </a>
    )
    }
    return (
        <motion.div whileHover={{scale: 1.05}}
                    className="group w-full md:basis-1/2 lg:basis-1/3 py-4 md:pe-4 rounded-xl hover:drop-shadow-pllx-gray cursor-pointer">
            <img className="group-hover:grayscale-0 grayscale rounded-2xl min-h-[280px] max-h-[280px] object-cover w-full border border-pllx-t-20" src={!img ? images.permanex : img} alt=""/>
            <div className="py-4 flex flex-col gap-2">
                <div className="flex justify-between items-end">
                    <h3 className="font-black uppercase font-clash text-2xl text-pllx-white">{title}</h3>
                    <Url url={url}></Url>
                </div>
                <p className="text-white font-switzer text-base">
                    {extract}
                </p>
            </div>
        </motion.div>
    )
}
export default GalleryPortafolioItemComponent;