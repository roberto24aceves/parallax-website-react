import idefault from '../assets/img/project.png';
import { motion } from "framer-motion";
const PreviewProjectsComponent = ({title,content,tags}) =>{
    return(
       <div className="container">
            <div className="flex flex-wrap justify-center md:justify-between items-center">
                <motion.img animate={{scale:[1,1.05,1]}} transition={{duration:1,times:[0,.5,1],ease:"easeInOut",repeat:Infinity}} className="drop-shadow-pllx-gray w-full mb-5 md:mb-0 md:h-[450px] object-contain md:object-cover lg:w-4/6" src={idefault} alt=""/>
                <div className="-my-10 mb-10 lg:mb-0 lg:mt-0 lg:w-2/6">
                    <h3 className="uppercase font-clash font-bold text-2xl text-white text-center lg:text-start">{title}</h3>
                    <p className="text-white font-switzer my-3 text-center lg:text-start">
                        {content}
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2">
                        {tags.map((tag,index) =>(
                            <div key={index} className="btn w-fit text-white text-base font-switzer bg-pllx-gray hover:bg-pllx-white hover:text-pllx-black transition-all duration-300">{tag}</div>
                        ))}
                    </div>
                </div>
            </div>
       </div>
    )
}
export default PreviewProjectsComponent;