import {motion} from "framer-motion";

const BannerComponent = ({title,subtitle, button, url}) => {
    return (
        <motion.div whileHover={{scale:1.05, rotate:1}} whileTap={{scale:1.08}} className="banner">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-4 w-80 w-full sm:w-2/3 xl:w-2/3 font-clash text-pllx-gray-dark text-center">
                    <h3 className="font-medium text-xl">{subtitle}</h3>
                    <h2 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{title}</h2>
                    <a className="btn btn-banner" href={url}>{button}</a>
                </div>
            </div>
        </motion.div>
    )
}
export default BannerComponent;