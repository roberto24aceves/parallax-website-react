import Layout from "../layout/Layout.jsx";
import ButtonAnimateComponent from "../components/ButtonAnimateComponent.jsx";
import PreviewProjectsComponent from "../components/PreviewProjectsComponent.jsx";
import FormContactComponent from "../components/FormContactComponent.jsx";
import TextScrollComponent from "../components/TextScrollComponent.jsx";
import PostItemComponent from "../components/PostItemComponent.jsx";
import SingleItemComponent from "../components/SingleItemComponent.jsx";
import TwoTextScrollComponent from "../components/TwoTextScrollComponent.jsx";
import HabilitysTeamComponent from "../components/HabilitysTeamComponent.jsx";
import GalleryPortafolioItemComponent from "../components/GalleryPortafolio/GalleryPortafolioItemComponent.jsx";
import GalleryPortafolioComponent from "../components/GalleryPortafolioComponent.jsx";
import BannerComponent from "../components/BannerComponent.jsx";

const Home = () =>{

    return(
        <Layout>
            <div className="flex flex-col justify-center items-center gap-5">
                <section className="flex flex-col justify-center items-center gap-6 h-[250px] md:h-[450px]">
                    <ButtonAnimateComponent content={"Parallax"}/>
                    <h1 className="text-white font-clash font-semibold text-2xl md:text-5xl uppercase text-center w-full md:w-2/3">Somos un equipo de desarrollo, creamos sitios web innovadores y ayudamos a las empresas a comunicarse de manera efectiva.</h1>
                </section>
                <TextScrollComponent text={"Parallax"}/>
                <section>
                    <PreviewProjectsComponent
                        title="Equipo Parallax"
                        content="Nuestro equipo esta conformado por diseñadores, mercadologos y desarrolladores, nuestra experiencia con diversas marcas nos inspiro a crear algo propio y con nuestro estilo, queremos innovar y ser referentes en el mercado."
                        tags={["SEO","Diseño Web", "Desarrollo web"]}/>
                </section>
                <section className="flex flex-col py-10 gap-5">
                    <div className="my-3 text-center">
                        <h2 className="font-clash text-white font-semibold text-2xl md:text-5xl uppercase">Conoce nuestro <br/> proceso.</h2>
                        <p className="font-switzer text-white">Conoce acontinuacion nuestro proceso para crear un sitio web.</p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <SingleItemComponent
                            title="Reunion de exploración"
                            subtitle="Etapa 1"
                            description="Aqui conocemos más hacerca de ti y de tu negocio, esto nos ayuda a conocer tu expectativa y alinearnos para determinar cuales seran las metas del proyecto."
                            button="1 - 2hrs"
                            url="#" />
                        <SingleItemComponent
                            title="Estrategia de contenido y Diseño ux"
                            subtitle="Etapa 2"
                            description="Aqui diseñamos la ruta que seguira el usuario y los puntos claves del sitio web, asi mismo definimos como sera la comunicacion con el usuario para conocer tu producto o servicio."
                            button="1 - 2 semanas"
                            url="#" />
                        <SingleItemComponent
                            title="Diseño e identidad visual"
                            subtitle="Etapa 3"
                            description="Aqui convertimos la estrategia y la experiencia de usuario en un diseño visual, que represente la identidad de tu marca y que sea atractivo para el usuario."
                            button="1 - 2hrs"
                            url="#" />
                        <SingleItemComponent
                            title="Implementación y desarrollo"
                            subtitle="Etapa 4"
                            description="En esta etapa damos vida a tu sitio web, aqui es donde juntamos el diseño y las estrategias para que tu sitio web sea funcional e implementamos un CMS para su facil administracion."
                            button="1 - 2hrs"
                            url="#" />
                    </div>
                </section>
                <TwoTextScrollComponent first={"Parallax"} second={"Web Studio"}/>
                <section>
                    <HabilitysTeamComponent habilitys={["Diseño Web","Desarrollo Web","SEO","Marketing Digital","Estrategia de contenido", "Creacion de contenido", "Diseño digital", "Branding"]}/>
                </section>
                <section className="my-10">
                    <h2 className="font-clash text-2xl md:text-5xl text-center text-white font-semibold">Nuestro portafolio</h2>
                    <p className="text-center font-switzer text-white">Conoce cada uno de nuestros proyectos.</p>
                    <GalleryPortafolioComponent />
                </section>
                <section className="my-5">
                    <BannerComponent title={"¿Tienes un proyecto en mente?"} subtitle={"Contactanos"} url={"#"} button={"Chattemos"} />
                </section>
            </div>
        </Layout>
    )
}
export default Home;