import BannerComponent from "../components/BannerComponent.jsx";
import Layout from "../layout/Layout.jsx";
import {Link} from "react-router-dom";
import ButtonAnimateComponent from "../components/ButtonAnimateComponent.jsx";

const Page404 = () =>{
    return(
        <Layout>
            <section className="container flex flex-col justify-center items-center gap-4 py-20 px-5">
                <h1 className="font-clash font-black text-3xl md:text-[50px] lg:text-[60px] text-pllx-gray-light uppercase md:text-center leading-tight">
                    Lo sentimos la pagina que buscas no esta disponible, vuelve más tarde.
                </h1>
                <Link to={"/"} className="bg-pllx-theme text-pllx-gray-dark font-clash font-black uppercase py-3 px-8 rounded-full inline-block w-fit hover:bg-pllx-gray-light ease-out transition-all duration-300">
                    Regresar al inicio
                </Link>
            </section>
        </Layout>
    )
}
export default Page404