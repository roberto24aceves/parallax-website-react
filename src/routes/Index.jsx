import Layout from "../layout/Layout.jsx";
import TextScrollComponent from "../components/TextScrollComponent.jsx";
import {Link} from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import GalleryPortafolioComponent from "../components/GalleryPortafolioComponent.jsx";
import FooterLayout from "../layout/FooterLayout.jsx";
import ContactForm from "../layout/ContactForm.jsx";
import LazyImg from "../layout/LazyImg.jsx";
import {ToastContainer} from "react-toastify";

const Index = () =>{
    return(
        <Layout>
            <ToastContainer />
            <section id="banner" className="banner container px-5 lg:px-0 h-[700px] flex flex-col justify-center items-center w-full gap-5">
                <h1 className="font-clash font-black text-3xl md:text-[50px] lg:text-[60px] text-pllx-gray-light uppercase md:text-center leading-tight">
                    ¡Somos el equipo de <span className="text-pllx-theme">programación</span> que tu proyecto necesita!
                </h1>
                <p className="text-sm font-switzer text-pllx-gray md:text-center lg:w-2/3">
                    Somos un equipo de profesionales con vasta experiencia creando aplicaciones y sitios web
                    funcionales, nuestro objetivo es guiarte y ayudarte a desarrollar tu proyecto con las mejores
                    tecnologías y con las mejores prácticas para que puedas alcanzar con eficacia tus objetivos
                    comerciales.
                </p>
                <div className="flex items-center md:justify-center gap-2 flex-wrap">
                    <a className="rounded-full bg-pllx-accent hover:bg-pllx-gray-light transition duration-300 ease-out text-pllx-gray-dark font-clash uppercase font-bold py-3 px-5"
                       target="_blank"
                       href="https://yxkdixicvsbupkvzjozk.supabase.co/storage/v1/object/public/parallax_public/parallax-servicios.pdf">
                        Descargar Brochure
                    </a>
                    <a
                        className="rounded-full bg-[#0057ff] hover:bg-white hover:text-[#0057ff] text-white transition duration-300 ease-out font-clash uppercase font-bold py-3 px-5"
                        href="https://www.behance.net/robertoaceves">
                        Go to Behance
                    </a>
                </div>
            </section>
            <TextScrollComponent text={"PARALLAX"}/>
            <section className="about border-b border-pllx-t-40 py-10 px-5 md:pt-24 md:pb-20 lg:pt-32 lg:pb-28">
                <div className="container grid gap-10">
                    <h2 className="bg-pllx-theme text-pllx-gray-dark font-clash font-black uppercase py-3 px-8 rounded-full inline-block w-fit">
                        ¿Quienes somos?
                    </h2>
                    <div className="flex flex-col lg:flex-row justify-center lg:items-center relative gap-10">
                    <LazyImg className={"w-full md:w-[400px] lg:w-[800px]"} src="https://yxkdixicvsbupkvzjozk.supabase.co/storage/v1/object/public/parallax_public/assets/lmm_preview.png"
                                 alt="Latin Media Monitor"/>
                        <div className="lg:absolute w-full flex flex-col md:flex-row justify-center lg:justify-between gap-4">
                            <div
                                className="md:max-w-[350px] lg:mb-[300px] bg-pllx-gray-dark border border-pllx-gray-light text-pllx-gray-light p-5 flex flex-col gap-2">
                                <div className="flex justify-between items-end">
                                    <h4 className="font-clash text-2xl uppercase font-black">
                                        Mision
                                    </h4>
                                    <a href="#servicios"
                                        className="cursor-pointer bg-white text-pllx-gray-dark flex h-12 w-12 rounded-full justify-center items-center border-solid border-pllx-gray-light border-8">
                                    <MdArrowOutward size={24}/>
                                </a>
                                </div>
                                <p className="font-switzer text-sm">
                                    La misión de Parallax se simplifica en brindar asesoría objetiva y desarrollar
                                    proyectos
                                    de excelencia digital, para que, junto a cada uno de nuestros clientes, podamos
                                    crecer,
                                    destacar y ser líderes en el desarrollo de software.
                                </p>
                            </div>
                            <div
                                className="md:max-w-[350px] lg:mt-[300px] bg-pllx-gray-dark border border-pllx-gray-light text-pllx-gray-light p-5 flex flex-col gap-2">
                                <div className="flex justify-between items-end">
                                    <h4 className="font-clash text-2xl uppercase font-black">
                                        Vision
                                    </h4>
                                    <a href="#servicios"
                                        className="cursor-pointer bg-white text-pllx-gray-dark flex h-12 w-12 rounded-full justify-center items-center border-solid border-pllx-gray-light border-8">
                                    <MdArrowOutward size={24}/>
                                </a>
                                </div>
                                <p className="font-switzer text-sm">
                                    Parallax no es una marca más de soluciones digitales, sino que, tiene el objetivo de
                                    ser
                                    líder en la asesoría y desarrollo de proyectos para micro y pequeñas empresas como
                                    la
                                    tuya, que están por trasladarse al gran mundo de internet o, en su caso, que desean
                                    seguir evolucionando.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="projects">
                <div id="portafolio" className="container flex gap-6 flex-col py-24 px-5">
                    <h2 className="bg-pllx-gray-light text-pllx-gray-dark font-clash font-black uppercase py-3 px-8 rounded-full inline-block w-fit">
                        Nuestros proyectos
                    </h2>
                    <h3 className="font-clash font-black text-3xl md:text-[50px] lg:text-[60px] text-pllx-white uppercase leading-tight">
                        Nuestros Proyectos <br/>Existosos
                    </h3>
                    <GalleryPortafolioComponent/>
                </div>
                <div id="servicios" className="container flex gap-6 flex-col justify-center items-center pb-24 px-5">
                    <h2 className="bg-pllx-theme text-pllx-gray-dark font-clash font-black uppercase py-3 px-8 rounded-full inline-block w-fit">
                        Nuestros servicios
                    </h2>
                    <h3 className="font-clash font-black text-3xl text-center md:text-[50px] lg:text-[60px] text-pllx-white uppercase leading-tight">
                        Conoce nuestros <br/>servicios
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        <div
                            className="md:max-w-[350px] bg-pllx-theme border border-pllx-gray-light text-pllx-gray-light p-5 flex flex-col gap-2">
                            <div className="flex justify-between items-start">
                                <h4 className="font-clash text-2xl uppercase font-black">
                                    Desarrollo de <br/>
                                    software
                                </h4>
                                <a href="#contacto"
                                    className="bg-white text-pllx-gray-dark flex h-12 w-12 rounded-full justify-center items-center border-solid border-pllx-accent-two border-8">
                                    <MdArrowOutward size={24} className="text-pllx-theme"/>
                                </a>
                            </div>
                            <p className="font-switzer text-sm">
                                Nuestro equipo te ayudará a desarrollar una aplicación funcional y visualmente
                                atractiva, que cumpla con tus expectativas y resuelva de manera eficiente los objetivos
                                planteados.
                            </p>
                            <div className="w-full rounded-xl bg-pllx-t-40 font-clash grid gap-2 px-4 py-2">
                                <p>Sitios web</p>
                                <p>
                                    Aplicaciones web
                                </p>
                                <p>
                                    Aplicaciones Moviles
                                </p>
                                <p>
                                    Software a la medida
                                </p>
                                <p>
                                    Automatización de procesos
                                </p>
                                <p>
                                    Landing pages
                                </p>
                            </div>
                        </div>
                        <div
                            className="md:max-w-[350px] bg-pllx-theme border border-pllx-gray-light text-pllx-gray-light p-5 flex flex-col gap-2">
                            <div className="flex justify-between items-start">
                                <h4 className="font-clash text-2xl uppercase font-black">
                                    Diseño UX/UI
                                </h4>
                                <a href="#contacto"
                                    className="bg-white text-pllx-gray-dark flex h-12 w-12 rounded-full justify-center items-center border-solid border-pllx-accent-two border-8">
                                    <MdArrowOutward size={24} className="text-pllx-theme"/>
                                </a>
                            </div>
                            <p className="font-switzer text-sm">
                                Nuestro equipo te ayudará a desarrollar una interfaz atractiva y entendible que cumpla
                                con tus metas, te ayude a alcanzar tus objetivos y permita al usuario final recorrer de
                                manera amigable tu aplicación.
                            </p>
                            <div className="w-full rounded-xl bg-pllx-t-40 font-clash grid gap-2 px-4 py-2">
                                <p>Diseño de interfaces</p>
                                <p>Implementación UI/UX</p>
                                <p>Diseño de Aplicaciones Moviles</p>
                                <p>Diseño de sitios web</p>
                                <p>Diseño de aplicaciones</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center md:justify-center gap-2 flex-wrap">
                        <a className="rounded-full bg-pllx-gray-light hover:bg-pllx-theme transition duration-300 ease-out text-pllx-gray-dark font-clash uppercase font-bold py-3 px-5"
                           target="_blank"
                           href="https://services.parallax.lat/">
                            Ver mas servicios
                        </a>
                        <a
                            className="rounded-full bg-pllx-accent hover:bg-pllx-gray-light hover:text-pllx-gray-dark text-white transition duration-300 ease-out font-clash uppercase font-bold py-3 px-5"
                            href="#contacto">
                            Cotizar proyecto
                        </a>
                    </div>
                </div>
            </section>
            <div>
                <div className="bg-pllx-theme h-10 w-full"></div>
                <div className="bg-pllx-accent-two h-10 w-full"></div>
                <div className="bg-pllx-accent h-10 w-full"></div>
            </div>
            <section className="about" id="contacto">
                <div className="container flex justify-center items-center gap-6 flex-col pt-28 pb-20 px-5">
                    <h2 className="bg-pllx-theme text-pllx-gray-dark font-clash font-black uppercase py-3 px-8 rounded-full inline-block w-fit">
                        Contactanos
                    </h2>
                    <h3 className="font-clash font-black text-3xl text-center md:text-[50px] lg:text-[60px] text-pllx-white uppercase leading-tight">
                        ¡Chateemos!
                    </h3>
                    <ContactForm whatsapp={"https://wa.link/i94sni"}/>
                </div>
                <FooterLayout/>
            </section>
        </Layout>
    )
}
export default Index