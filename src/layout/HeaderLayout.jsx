import images from "../images.jsx";
import menuopen from '../assets/img/open.svg';
import menuclose from '../assets/img/close.svg';
import {Link} from 'react-router-dom';
import { useState } from "react";
import { motion } from "framer-motion";
const HeaderLayout = () => {
    const [toogle, setToogle] = useState(false)
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 50
    };
    return (
        <div>
            <header className="container py-5">
                <div className="flex justify-between items-center px-4 md:px-16">
                    <Link to={"/"}>
                        <img src={images.logo} className="w-32" alt=""/>
                    </Link>
                    <div className="flex items-center gap-6">
                        <a href="https://www.behance.net/robertoaceves" className="btn btn-primary uppercase hidden sm:block">Portafolio</a>
                        <img onClick={() => setToogle(!toogle)}
                             data-toogle={toogle} src={!toogle ? menuopen : menuclose} className="w-10 h-10 cursor-pointer hidden" alt=""/>
                    </div>
                </div>
            </header>
            <motion.div data-toogle={toogle} layout transition={spring}
                        className="menu px-3 py-5 bg-white fixed z-[100]"
                        style={{left: "-100%", top: "0", width: "100%", minHeight: "100vh"}}>
                <div className="row h-100 gap-3 justify-content-center align-items-center">
                </div>
            </motion.div>
        </div>
    )
}
export default HeaderLayout;