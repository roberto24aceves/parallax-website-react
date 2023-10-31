import BannerComponent from "../components/BannerComponent.jsx";
import Layout from "../layout/Layout.jsx";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

const Page404 = () =>{
    return(
        <Layout>
            <section className="flex flex-col justify-center items-center gap-4 py-4 h-full">
                <motion.div
                    animate={{
                        scale:[0.95,1,0.95],
                    }}
                    transition={{
                        duration:2,
                        ease:"easeInOut",
                        times:[0,0.25,0.75],
                        repeat:"Infinity"
                    }} className="b-animate">
                    Error 404
                </motion.div>
                <h1 className="font-clash text-3xl sm:text-4xl lg:text-6xl text-center text-white sm:w-3/4 md:w-2/3 mx-auto drop-shadow-pllx-gray">
                    Lo sentimos la pagina que buscas no esta disponible, vuelve más tarde.
                </h1>
                <Link to={"/"} className="btn bg-pllx-white hover:bg-pllx-blue font-clash font-medium text-pllx-blue hover:text-pllx-white hover:drop-shadow-pllx-blue hover:scale-105 text-xl transition-all duration-300">
                    Regresar al inicio
                </Link>
            </section>
            <section className="py-4">
                <BannerComponent
                    subtitle="Acerda de nosotros"
                    title="¡Conoce nuestro portafolio!"
                    button="¡Haz click aqui!"
                    url="/portafolio"/>
            </section>
        </Layout>
    )
}
export default Page404