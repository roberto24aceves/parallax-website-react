import BannerComponent from "../components/BannerComponent.jsx";
import Layout from "../layout/Layout.jsx";
import {Link} from "react-router-dom";
import ButtonAnimateComponent from "../components/ButtonAnimateComponent.jsx";

const Page404 = () =>{
    return(
        <Layout>
            <section className="flex flex-col justify-center items-center gap-4 py-4">
                <ButtonAnimateComponent content={"Error 404"}/>
                <h1 className="font-clash text-3xl sm:text-4xl lg:text-6xl text-center text-white sm:w-3/4 md:w-2/3 mx-auto drop-shadow-pllx-gray">
                    Lo sentimos la pagina que buscas no esta disponible, vuelve más tarde.
                </h1>
                <Link to={"/"} className="btn bg-pllx-white hover:bg-pllx-blue font-clash font-medium text-pllx-gray-dark hover:drop-shadow-pllx-blue hover:scale-105 text-xl transition-all duration-300">
                    Regresar al inicio
                </Link>
            </section>
            <section className="py-4">
                <BannerComponent
                    subtitle="Nuestros proyectos"
                    title="¡Conoce nuestro portafolio!"
                    button="¡Haz click aqui!"
                    url="https://www.behance.net/robertoaceves"/>
            </section>
        </Layout>
    )
}
export default Page404