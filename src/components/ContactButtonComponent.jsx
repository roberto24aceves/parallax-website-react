import {motion} from "framer-motion";
import {BsWhatsapp} from 'react-icons/bs';
const ContactButtonComponent = ({title,url}) =>{
    return(
            <motion.a initial={{scale:0, opacity:0}} animate={{opacity:1,scale:1}} transition={{duration:0.8, type:'spring'}} whileHover={{scale:1.08,rotate:3}} whileTap={{scale:1.08,rotate:3}}
                      className="fixed flex flex-row justify-between gap-2 items-center bottom-4 right-4 md:bottom-6 md:right-6 bg-gradient-to-tr from-pllx-theme to-pllx-accent px-5 py-3 rounded-full font-clash text-white font-medium text-base md:text-lg drop-shadow-pllx-theme z-20"
                      href={url}><BsWhatsapp/> {title}</motion.a>
    )
}
export default ContactButtonComponent;