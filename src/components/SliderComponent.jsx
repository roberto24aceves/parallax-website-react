import SliderItemComponent from "./Slider/SliderItemComponent.jsx";
import {useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";
import { TbHandFinger } from "react-icons/tb";
const SliderComponent = () =>{
    const items = [{"title":"Proyecto 1"},{"title":"Proyecto 2"},{"title":"Proyecto 3"},{"title":"Proyecto 4"},{"title":"Proyecto 5"},{"title":"Proyecto 6"}];
    const container = useRef(null);
    const sTutorial = useRef(null);
    const [rleft,setRleft] = useState(0)
    const [fTutorial,setFTutorial] = useState(true);
    const variants = {
        open:{opacity:1},
        close:{opacity:0}
    }
    useEffect(()=>{
        setRleft(container.current.scrollWidth - container.current.offsetWidth);
        const timer = setTimeout(() => {
            setFTutorial(false);
        }, 4500);
        return () => {
            clearTimeout(timer);
        };
    },[]);
    const handleClickSlider = () =>{
        setFTutorial(false);
    }
    return(
        <motion.div ref={container} className="w-full overflow-hidden relative cursor-pointer" onClick={handleClickSlider}>
            <motion.div initial={{opacity:1}} animate={fTutorial ? "open" : "close"} variants={variants} transition={{duration:1}} ref={sTutorial} className="absolute w-full h-full rounded-l-2xl inset-0 top-[-25px] text-4xl text-white flex items-center justify-center pointer-events-none z-50 transition-all duration-300">
                <motion.div animate={{x:[0,-10,-100,0],scale:[0.95,1,1,0.95]}} transition={{duration:1.5,times:[0,0.5,0.8,1.5],ease:'easeInOut',repeat:Infinity}}>
                    <TbHandFinger className="p-1 border-2 border-white rounded-full"/>
                </motion.div>
            </motion.div>
            <motion.div drag="x" dragConstraints={{right:0, left:-rleft}} className="flex gap-5">
                {
                    items.map((item,index)=>(
                        <div key={index} className="item-slider min-w-full md:min-w-[70%]">
                            <SliderItemComponent title={item.title} location="Mérida, Yucatán, México."/>
                        </div>
                    ))
                }
            </motion.div>
        </motion.div>
    )
}
export default SliderComponent;