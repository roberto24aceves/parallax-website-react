import images from "../images.jsx";
import {Link} from "react-router-dom";
const FooterLayout = () => {
    return (
        <footer className="container pt-10 pb-10 mb-0">
            <div className="flex flex-col sm:flex-row gap-5 justify-center sm:justify-between items-center">
                <span className="text-white text-base text-center sm:text-start font-switzer">
                    © 2019 Todos los derechos reservados. Parallax Estudio de desarrollo web.
                </span>
                <Link to={"/"}>
                    <img src={images.logo} className="w-32" alt=""/>
                </Link>
            </div>
        </footer>

        )
}
export default FooterLayout;