import {motion} from "framer-motion";

const ServicesItemComponent = ({title,description,subtitle,services,url,button}) =>{
    return(
        <motion.div whileHover={{scale:1.025,rotate:1}} className="flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between bg-pllx-white hover:drop-shadow-pllx-theme hover:bg-pllx-theme group px-5 py-8 rounded-xl max-w-[1100px]">
            <div className="flex flex-col gap-2 w-full md:w-1/2 lg:w-3/6 md:pr-4 lg-pr-8  text-sm">
                <h3 className="group-hover:text-pllx-white font-clash font-semibold text-2xl md:text-4xl text-pllx-black">{title}</h3>
                <p className="group-hover:text-pllx-white font-switzer text-pllx-black">{description}</p>
                <a className="group-hover:drop-shadow-pllx-theme btn w-fit bg-gradient-to-tl from-pllx-white to-white font-clash font-semibold text-pllx-black group-hover:text-pllx-theme" href={url}>{button}</a>
            </div>
            <div className="flex flex-col w-full md:w-1/2 lg:w-2/6">
                <h4 className="group-hover:text-pllx-white font-clash font-semibold text-xl md:text-2xl text-pllx-black">{subtitle}</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                    {services.map((service,index) =>(
                        <span key={index} className="inline-block bg-pllx-theme px-3 py-1 rounded-full text-pllx-white font-semibold font-switzer group-hover:bg-pllx-white group-hover:text-pllx-black text-sm">{service}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
export default ServicesItemComponent;