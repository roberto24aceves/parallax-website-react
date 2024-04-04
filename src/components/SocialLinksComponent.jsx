import {BiLogoFacebook, BiLogoLinkedin, BiSolidPaperPlane} from "react-icons/bi";
import {motion} from "framer-motion";
const SocialLinksComponent = () =>{
    return(
        <div className="flex justify-center gap-3 my-4">
            <motion.a animate={{
                scale: [0.95, 1, 0.95],
            }}
                      transition={{
                          duration: 1,
                          ease: "easeInOut",
                          times: [0, 0.5, 1],
                          repeat: "Infinity"
                      }}
                      className="flex justify-center items-center w-10 h-10 rounded-full bg-pllx-white text-xl drop-shadow-pllx-blue"
                      href="#">
                <BiLogoLinkedin className="text-pllx-gray-dark"/>
            </motion.a>
            <motion.a animate={{
                scale: [0.95, 1, 0.95],
            }}
                      transition={{
                          duration: 1,
                          ease: "easeInOut",
                          times: [0, 0.5, 1],
                          repeat: "Infinity"
                      }}
                      className="flex justify-center items-center w-10 h-10 rounded-full bg-pllx-white text-xl drop-shadow-pllx-blue"
                      href="#">
                <BiLogoFacebook className="text-pllx-gray-dark"/>
            </motion.a>
            <motion.a animate={{
                scale: [0.95, 1, 0.95],
            }}
                      transition={{
                          duration: 1,
                          ease: "easeInOut",
                          times: [0, 0.5, 1],
                          repeat: "Infinity"
                      }}
                      className="flex justify-center items-center w-10 h-10 rounded-full bg-pllx-white text-xl drop-shadow-pllx-blue"
                      href="#">
                <BiSolidPaperPlane className="text-pllx-gray-dark"/>
            </motion.a>
        </div>
    )
}
export default SocialLinksComponent;