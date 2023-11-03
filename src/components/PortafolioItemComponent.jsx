import idefault from '../assets/img/mockup.png'
import {motion} from "framer-motion";

const PortafolioItemComponent = ({title,date,url,image}) => {
    return (
        <motion.article whileHover={{scale:1.05}} className="postPortafolio">
            <div className="flex flex-col gap-3 md:w-1/2 xl:w-1/2 px-6 py-10 md:px-14 md:py-10 order-last md:order-first">
                <h3 className="font-clash text-white text-lg">{date}</h3>
                <h2 className="text-white font-clash text-3xl md:text-4xl lg:text-5xl xl:w-2/3">{title}</h2>
            </div>
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 items-end justify-end px-0 relative">
                <img className="w-full md:w-3/4 h-60 md:h-80 object-cover rounded-t-2xl md:rounded-s-none md:rounded-r-2xl" src={image ? image : idefault} alt=""/>
                <a className="btn btn-primary absolute top-3 right-3" href={url}>Ver más</a>
            </div>
        </motion.article>
    )
}
export default PortafolioItemComponent;