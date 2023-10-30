import SliderItemComponent from "./Slider/SliderItemComponent.jsx";
import {useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";
const SliderComponent = () =>{
    const items = [{"title":"Proyecto 1"},{"title":"Proyecto 2"},{"title":"Proyecto 3"},{"title":"Proyecto 4"},{"title":"Proyecto 5"},{"title":"Proyecto 6"}];
    const container = useRef(null);
    const [rleft,setRleft] = useState(0)
    useEffect(()=>{
        setRleft(container.current.scrollWidth - container.current.offsetWidth);
    },[]);
    return(
        <motion.div ref={container} className="w-full overflow-hidden">
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