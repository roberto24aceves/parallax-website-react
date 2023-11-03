import {IoIosArrowDown} from "react-icons/io";
import {useRef, useState} from "react";
import { motion } from "framer-motion";

const AccordionItemComponent = () =>{
    const [opena,setOpena] = useState(false);
    const refiarrow = useRef(null);
    const variants = {
        open:{opacity:1,height: "100%"},
        close:{opacity: 0, height: "0"}
    }
    const handleClickTitle = () =>{
        opena !== true ? setOpena(true) : setOpena(false);
    }
    return(
        <div className="accordion-item">
            <motion.div whileHover={{scale:1.01}} className="accordion-title" onClick={handleClickTitle}>
                ¿Facturamos nuestro proyectos? <IoIosArrowDown/>
            </motion.div>
            <motion.div animate={opena !== false ? "open" : "close"} variants={variants} transition={{duration:0.5, ease:"easeInOut"}} className="flex justify-center pt-3 pb-4 pointer-events-none">
                <motion.p className="accordion-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium architecto asperiores
                    deleniti dicta doloremque earum enim exercitationem molestias mollitia natus necessitatibus
                    nulla obcaecati porro quae quasi quos reprehenderit repudiandae, suscipit tempore unde vero
                    voluptate.
                </motion.p>
            </motion.div>
        </div>
    )
}
export default AccordionItemComponent;