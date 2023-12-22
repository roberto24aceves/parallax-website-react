import Layout from "../layout/Layout.jsx";
import ButtonAnimateComponent from "../components/ButtonAnimateComponent.jsx";
import PreviewProjectsComponent from "../components/PreviewProjectsComponent.jsx";
import TextScrollComponent from "../components/TextScrollComponent.jsx";
import SingleItemComponent from "../components/SingleItemComponent.jsx";
import TwoTextScrollComponent from "../components/TwoTextScrollComponent.jsx";
import HabilitysTeamComponent from "../components/HabilitysTeamComponent.jsx";
import GalleryPortafolioComponent from "../components/GalleryPortafolioComponent.jsx";
import BannerComponent from "../components/BannerComponent.jsx";
import ContactButtonComponent from "../components/ContactButtonComponent.jsx";
import ServicesItemComponent from "../components/ServicesItemComponent.jsx";
import SocialLinksComponent from "../components/SocialLinksComponent.jsx";
const Home = () =>{

    return(
        <Layout>
            <ContactButtonComponent title="Chattemos!" url="https://wa.link/ih4iog"/>
            <div className="flex flex-col justify-center items-center gap-5 pt-20">
                <section className="flex flex-col justify-center items-center gap-6 h-[250px] md:h-[450px]">
                    <ButtonAnimateComponent content={"Bienvenido"}/>
                    <h1 className="text-white font-clash font-semibold text-2xl md:text-6xl uppercase text-center w-full md:w-2/3">Somos especialistas e Innovadores.</h1>
                    <p className="text-white w-full md:w-2/3 text-center">Somos un equipo de desarrollo de software con sede en Mexico, apasionados por desarrollar proyectos funcionales e innovadores.</p>
                </section>
                <TextScrollComponent text={"Parallax"}/>
                <section>
                    <PreviewProjectsComponent
                        title="Nuestro Equipo"
                        content="   Nuestro equipo esta conformado por expertos de distintas areas, cada uno con su propia
                                    experiencia y estilo, esto nos permite ver desde direntes perspectivas cada proyecto y
                                    asi poder crear algo unico."
                        tags={["SEO","Diseño UX/UI", "Desarrollo de software"]}/>
                </section>
                <section id="procesos" className="flex flex-col py-10 gap-5">
                    <div className="my-3 text-center">
                        <h2 className="font-clash text-white font-semibold text-2xl md:text-5xl uppercase">Conoce nuestro <br/> proceso.</h2>
                        <p className="font-switzer text-white">Conoce acontinuacion nuestro proceso para crear un sitio web.</p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <SingleItemComponent
                            title="Reunion de exploración"
                            subtitle="Etapa 1"
                            description="Conocemos más hacerca de ti y de tu negocio, esto nos ayuda a saber mas sobre tu expectativa para determinar cuales seran las metas del proyecto."
                            button="1 - 2hrs"
                            url="#" />
                        <SingleItemComponent
                            title="Estrategia de contenido y Diseño ux"
                            subtitle="Etapa 2"
                            description="Diseñamos la ruta que seguira el usuario y los puntos claves del sitio web, definimos como sera la comunicacion con el usuario para conocer tu producto o servicio."
                            button="1 - 2 semanas"
                            url="#" />
                        <SingleItemComponent
                            title="Diseño e identidad visual"
                            subtitle="Etapa 3"
                            description="Convertimos la estrategia y la experiencia de usuario en algo visual, que sea atractivo y represente la identidad de tu marca"
                            button="1 - 2 semanas"
                            url="#" />
                        <SingleItemComponent
                            title="Implementación y desarrollo"
                            subtitle="Etapa 4"
                            description="En esta etapa damos vida a tu proyecto, aqui es donde reunimos el diseño y las estrategias para que tu aplicacion sea funcional."
                            button="Depende del proyecto"
                            url="#" />
                    </div>
                </section>
                <TwoTextScrollComponent first={"Parallax"} second={"Web Studio"}/>
                <section id="servicios">
                    <h2 className="font-clash text-2xl md:text-5xl text-center text-white font-semibold uppercase">Nuestros Servicios</h2>
                    <p className="text-white font-switzer text-center">Conoce cada uno de nuestros servicios y categorias.</p>
                    <div className="flex flex-col gap-5 justify-center my-5">
                        <ServicesItemComponent
                            title="Desarrollo de software"
                            description="En parallax desarrollamos aplicaciones cuidando cada detalle, desde el diseno y la experiencia de usuario hasta la seguridad de la informacion."
                            subtitle="Servicios"
                            services={["Sitios web","Aplicaciones web","Aplicaciones moviles","Gestores de contenido","Desarrollo de software"]}
                            url="https://wa.link/ih4iog" button="Chateemos!"/>
                        <ServicesItemComponent
                            title="Diseño UX/UI"
                            description="Creamos experiencias de usuario que conectan con tu audiencia, diseñamos interfaces que sean atractivas y funcionales acorde a tu marca."
                            subtitle="Servicios"
                            services={["Experiencia de usuario","Desarrollo de interfaz de usuario","Diseño de aplicaciones","Diseño de sitios web","Diseño de aplicaciones moviles"]}
                            url="https://wa.link/ih4iog" button="Chateemos!"/>
                    </div>
                </section>
                <section className="my-10" id="portafolio">
                    <h2 className="font-clash text-2xl md:text-5xl text-center text-white font-semibold">Nuestro portafolio</h2>
                    <p className="text-center font-switzer text-white">Todos los proyectos nacen de una idea y todas las ideas tienen una historia para contar</p>
                    <GalleryPortafolioComponent />
                </section>
                <section className="my-5" id="chateemos">
                    <BannerComponent
                        title={"¿Tienes un proyecto en mente?"}
                        subtitle={"Chateemos!"}
                        url={"https://wa.link/ih4iog"}
                        button={"Enviar mensaje"} />
                        <SocialLinksComponent/>
                </section>
            </div>
        </Layout>
    )
}
export default Home;