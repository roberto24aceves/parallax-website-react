import {motion} from "framer-motion";

const ButtonAnimateComponent = ({content}) =>{
    return (
        <motion.div
            animate={{
                scale:[0.95,1.1,0.95],
            }}
            transition={{
                duration:1,
                ease:"easeInOut",
                times:[0,0.5,1],
                repeat:"Infinity"
            }} className="b-animate drop-shadow-pllx-blue">
            {content}
        </motion.div>
    )
}
export default ButtonAnimateComponent;