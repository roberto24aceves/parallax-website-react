import {motion, useScroll} from "framer-motion";

const TwoTextScrollComponent = ({first,second}) =>{
    const { scrollY } = useScroll();
    const elements = (text) =>{
        let item = [];
        switch (text) {
            case 'first':
                for(let i = 0 ; i < 50 ; i++){
                    item.push(first);
                }
                break;
            case 'second':
                for(let i = 0 ; i < 50 ; i++){
                    item.push(second);
                }
                break;
        }
        return (item);
    }
    return(
        <div className="flex flex-col items-center justify-center h-[200px] overflow-hidden">
            <div className="py-3 px-10 bg-pllx-accent -rotate-3 w-[4000px] h-fit">
                <motion.div style={{x:scrollY}} transition={{type:'spring'}} className="flex justify-end gap-5">
                    {elements('first').map((item,index)=>(
                        <div key={index} className="min-w-fit text-pllx-gray-dark font-clash font-bold uppercase text-center">{item}</div>
                    ))}
                </motion.div>
            </div>
            <div className="py-3 px-10 bg-pllx-white rotate-2 w-[4000px] h-fit z-10">
                <motion.div style={{x:scrollY}} transition={{type:'spring'}} className="flex justify-end gap-5">
                    {elements('second').map((item,index)=>(
                        <div key={index} className="min-w-fit text-pllx-gray-dark font-clash font-bold uppercase text-center">{item}</div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
export default TwoTextScrollComponent;