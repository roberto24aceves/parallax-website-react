import idefault from "../../assets/img/mockup.png";
import {motion} from "framer-motion";
const GalleryPortafolioItemComponent = ({title,extract,img,url}) =>{
    const Link = (url) =>{
        return(
            <a className="border-b border-white text-pllx-white font-switzer font-medium mt-5 py-1" href={url}>
                Ver proyecto
            </a>
        )
    }
    return(
        <motion.div whileHover={{scale:1.05}} className="w-full md:basis-1/2 lg:basis-1/3 py-4 px-3 rounded-xl hover:drop-shadow-pllx-gray">
            <img src={!img ? idefault : img} alt=""/>
            <div className="py-4">
                <h3 className="font-medium font-clash text-2xl text-pllx-white">{title}</h3>
                <p className="text-white font-switzer my-3">
                    {extract}
                </p>
                {url ? Link(url) : null}
            </div>
        </motion.div>
    )
}
export default GalleryPortafolioItemComponent;