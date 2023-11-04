import {motion} from "framer-motion";
const ContactButtonComponent = ({title,url}) =>{
    return(
            <motion.a whileHover={{scale:1.08,rotate:3}} whileTap={{scale:1.08,rotate:3}} className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-gradient-to-tr from-pllx-blue to-indigo-600 px-5 py-3 rounded-full font-clash text-white font-medium text-base md:text-lg drop-shadow-pllx-blue z-20" href={url}>{title}</motion.a>
    )
}
export default ContactButtonComponent;