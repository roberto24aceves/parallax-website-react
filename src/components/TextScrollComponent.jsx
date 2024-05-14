import { motion, useScroll } from "framer-motion";
const TextScrollComponent = ({text}) =>{
    const { scrollY } = useScroll();
    const elements = () =>{
        let items = [];
        for(let i = 0 ; i < 50 ; i++){
            items.push(text);
        }
        return (items);
    }
    return(
        <div className="flex flex-col items-center justify-center h-[200px] overflow-hidden">
            <div className="py-3 px-10 bg-pllx-theme rotate-2 w-[4000px] h-fit">
                <motion.div style={{x:scrollY}} transition={{type:'spring'}} className="flex justify-end gap-5">
                    {elements().map((item,index)=>(
                        <div key={index} className="min-w-fit text-white font-clash font-bold uppercase text-center">{item}</div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
export default TextScrollComponent;