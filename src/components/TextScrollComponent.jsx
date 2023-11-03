import { motion, useScroll } from "framer-motion";
const TextScrollComponent = ({text}) =>{
    const { scrollY } = useScroll();
    const elements = () =>{
        let items = [];
        for(let i = 0 ; i < 50 ; i++){
            items.push(<div className="min-w-fit text-white font-clash font-bold uppercase text-center">{text}</div>);
        }
        return (items);
    }
    return(
        <div className="py-3 px-10 bg-pllx-blue rotate-2 w-[2000px] h-fit">
            <motion.div style={{x:scrollY}} transition={{type:'spring'}} className="flex justify-end gap-5">
                {elements().map((items)=>(items))}
            </motion.div>
        </div>
    )
}
export default TextScrollComponent;