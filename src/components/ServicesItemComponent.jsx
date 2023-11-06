import {motion} from "framer-motion";

const ServicesItemComponent = () =>{
    return(
        <motion.div whileHover={{scale:1.025,rotate:1}} className="flex flex-col gap-3 md:gap-0 md:flex-row bg-pllx-blue hover:drop-shadow-pllx-blue hover:bg-pllx-white group flex px-5 py-8 rounded-xl">
            <div className="flex flex-col gap-2 w-full md:w-1/2 lg:w-2/3 md:pr-4 lg-pr-8  text-sm">
                <h3 className="group-hover:text-pllx-black font-clash font-semibold text-2xl md:text-4xl text-white">Servicios para Webs</h3>
                <p className="group-hover:text-pllx-black font-switzer text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, doloribus eius, eligendi eum incidunt ipsam maiores neque nobis odit possimus soluta suscipit. Fugit, itaque numquam?</p>
                <a className="group-hover:text-pllx-blue group-hover:drop-shadow-pllx-blue btn w-fit bg-gradient-to-tl from-pllx-white to-white font-clash font-semibold text-pllx-blue group-hover:text-pllx-gray-dark" href="#">Chateemos!</a>
            </div>
            <div className="flex flex-col w-full md:w-1/2 lg:w-1/3">
                <h4 className="group-hover:text-pllx-black font-clash font-semibold text-xl md:text-2xl text-white">Nuestros servicios</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                    <span className="inline-block bg-pllx-white px-3 py-1 rounded-full text-pllx-blue font-semibold font-switzer group-hover:text-pllx-gray-dark text-sm">Diseño UX/UI</span>
                    <span className="inline-block bg-pllx-white px-3 py-1 rounded-full text-pllx-blue font-semibold font-switzer group-hover:text-pllx-gray-dark text-sm">Desarrollo Web</span>
                    <span className="inline-block bg-pllx-white px-3 py-1 rounded-full text-pllx-blue font-semibold font-switzer group-hover:text-pllx-gray-dark text-sm">Estrategia SEO</span>
                    <span className="inline-block bg-pllx-white px-3 py-1 rounded-full text-pllx-blue font-semibold font-switzer group-hover:text-pllx-gray-dark text-sm">Consultoria SEO</span>
                </div>
            </div>
        </motion.div>
    )
}
export default ServicesItemComponent;