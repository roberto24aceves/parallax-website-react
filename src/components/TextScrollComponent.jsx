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
        <div className="flex flex-col items-center justify-center overflow-hidden">
            <div className="py-3 px-10 bg-pllx-gray-dark w-[4000px] h-fit border-t border-b border-pllx-t-30">
                <motion.div style={{x:scrollY}} transition={{type:'spring'}} className="flex justify-end gap-5">
                    {elements().map((item,index)=>(
                        <div key={index} className="flex flex-row">
                            <div className="flex flex-row gap-5 items-center justify-center">
                                <span
                                    className="min-w-fit text-pllx-gray-light font-clash font-bold uppercase text-center">{item}</span>
                                <img className="w-5 block me-4"
                                    src="https://yxkdixicvsbupkvzjozk.supabase.co/storage/v1/object/public/parallax_public/assets/pllx-cross.svg"
                                    alt=""/>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
export default TextScrollComponent;