import images from "../images.jsx";
import LazyImage from "./LazyImg.jsx";
const FooterLayout = () => {
    return (
        <footer className="container pt-10 pb-10 mb-0">
            <div
                className="flex flex-col sm:flex-row gap-5 justify-center sm:justify-between items-center px-4 md:px-16">
                <a href={"https://parallax.lat"}>
                    <LazyImage src={images.logo_footer} className="w-48" alt=""/>
                </a>
                <span className="text-white text-base text-center sm:text-start font-switzer">
                    © 2024 Todos los derechos reservados.
                </span>
            </div>
        </footer>

    )
}
export default FooterLayout;