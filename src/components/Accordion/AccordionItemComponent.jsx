import {IoIosArrowDown} from "react-icons/io";
import {useRef, useState} from "react";
import { motion } from "framer-motion";

const AccordionItemComponent = () =>{
    const [opena,setOpena] = useState(false);
    const variants = {
        open:{opacity:1,height: "auto"},
        close:{opacity: 0, height: "0"}
    }
    const handleClickTitle = () =>{
        opena !== true ? setOpena(true) : setOpena(false);
        console.log(opena);
    }
    return(
        <div className="accordion-item">
            <div className="accordion-title" onClick={handleClickTitle}>
                ¿Facturamos nuestro proyectos? <IoIosArrowDown/>
            </div>
            <motion.div animate={opena !== false ? "open" : "close"} variants={variants} transition={{duration:.3}} className="flex justify-center py-2 pointer-events-none">
                <p className="accordion-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium architecto asperiores
                    deleniti dicta doloremque earum enim exercitationem molestias mollitia natus necessitatibus
                    nulla obcaecati porro quae quasi quos reprehenderit repudiandae, suscipit tempore unde vero
                    voluptate.
                </p>
            </motion.div>
        </div>
    )
}
export default AccordionItemComponent;