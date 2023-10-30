import idefault from '../assets/img/project.png';
import { motion } from "framer-motion";
const PreviewProjectsComponent = () =>{
    return(
       <div className="container">
            <div className="flex flex-wrap justify-center md:justify-between items-center">
                <motion.img animate={{scale:[1,1.05,1]}} transition={{duration:1,times:[0,.5,1],ease:"easeInOut",repeat:Infinity}} className="drop-shadow-pllx-gray w-full lg:w-4/6" src={idefault} alt=""/>
                <div className="-my-10 mb-10 lg:mb-0 lg:mt-0 lg:w-2/6">
                    <h3 className="uppercase font-clash font-bold text-2xl text-white text-center lg:text-start">Latín Media Monitor</h3>
                    <p className="text-white font-switzer my-3 text-center lg:text-start">
                        Desarrollamos el sitio web funcional de Latin Media Monitor, líder en monitoreo de medios
                        latinoamericanos. Desde el diseño web hasta el contenido SEO, creamos una experiencia digital
                        impactante. Programamos el sitio con precisión para una navegación intuitiva. Refleja la
                        excelencia y liderazgo de Latin Media Monitor en la industria.
                    </p>
                    <div className="flex justify-center lg:justify-start items-center gap-4">
                        <div className="btn text-white text-base font-switzer bg-pllx-gray hover:bg-pllx-white hover:text-pllx-black transition-all duration-300">SEO Content</div>
                        <div className="btn text-white text-base font-switzer bg-pllx-gray hover:bg-pllx-white hover:text-pllx-black transition-all duration-300">Web Desing</div>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default PreviewProjectsComponent;