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
                    <h1 className="text-white font-clash font-semibold text-2xl md:text-6xl uppercase text-center w-full md:w-2/3">
                        Hola, <br/>
                        somos Parallax.
                    </h1>
                    <p className="text-white w-full md:w-2/3 text-center">
                        Somos un equipo de profesionales con vasta experiencia creando aplicaciones y sitios web
                        funcionales, nuestro objetivo es guiarte y ayudarte a desarrollar tu proyecto con las mejores
                        tecnologías y con las mejores prácticas para que puedas alcanzar con eficacia tus objetivos
                        comerciales.
                    </p>
                </section>
                <TextScrollComponent text={"Parallax"}/>
                <section>
                    <PreviewProjectsComponent
                        title="Nuestro Equipo"
                        content="
                            En nuestro equipo podrás encontrar expertos en distintas áreas, con diversidad de estilos y resolución de problemas, esto nos permite comprender cada problemática y desarrollar una solución efectiva.
                        "
                        tags={["SEO","Diseño UX/UI", "Desarrollo de software", "Desarrollo web"]}/>
                </section>
                <section id="procesos" className="flex flex-col py-10 gap-5">
                    <div className="my-3 text-center">
                        <h2 className="font-clash text-white font-semibold text-2xl md:text-5xl uppercase">Conoce nuestro <br/> proceso.</h2>
                        <p className="font-switzer text-white">Conoce a continuación nuestro proceso para desarrollar un proyecto:</p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <SingleItemComponent
                            title="Reunion de exploración"
                            subtitle="Etapa 1"
                            description="Conocemos más hacerca de ti y de tu empresa, esto nos ayuda a saber mas sobre tu expectativa y así determinar cuales serán las metas del proyecto."
                            button="1 - 2hrs"
                            url="#" />
                        <SingleItemComponent
                            title="Estrategia de contenido y Diseño UX"
                            subtitle="Etapa 2"
                            description="Diseñamos la ruta que seguira el usuario y los puntos claves del proyecto, definimos como será la comunicacion con el usuario para conocer tu producto o servicio."
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
                            description="En esta etapa damos vida a tu proyecto, aqui es donde reunimos el diseño y las estrategias para construir tu aplicación o sitio web."
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
                            description="Nuestro equipo te ayudará a desarrollar una aplicación funcional y visualmente atractiva, que cumpla con tus expectativas y resuelva de manera eficiente los objetivos planteados."
                            subtitle="Servicios"
                            services={["Sitios web","Aplicaciones web","Aplicaciones moviles","Gestores de contenido","Desarrollo de software","Software a la medida"]}
                            url="https://wa.link/ih4iog" button="Chateemos!"/>
                        <ServicesItemComponent
                            title="Diseño UX/UI"
                            description="Nuestro equipo te ayudará a desarrollar una interfaz atractiva y entendible que cumpla con tus metas, te ayude a alcanzar tus objetivos y permita al usuario final recorrer de manera amigable tu aplicación."
                            subtitle="Servicios"
                            services={["Experiencia de usuario","Desarrollo de interfaz de usuario","Diseño de aplicaciones","Diseño de sitios web","Diseño de aplicaciones moviles"]}
                            url="https://wa.link/ih4iog" button="Chateemos!"/>
                    </div>
                </section>
                <section className="mt-10 mb-28 w-full" id="portafolio">
                    <h2 className="font-clash text-2xl md:text-5xl text-center text-white font-semibold uppercase">Nuestro
                        portafolio</h2>
                    <p className="text-center font-switzer text-white">Todos los proyectos nacen de una idea y todas las
                        ideas tienen una historia para contar</p>
                    <GalleryPortafolioComponent/>
                    <h2 className="font-clash text-2xl md:text-5xl text-center text-white font-semibold md:hidden uppercase">Nuestros Clientes</h2>
                    <h3 className="text-center font-clash text-white mb-10 md:mt-5 md:mb-10 md:font-semibold md:text-2xl ">Ellos hán confiado
                        en nosotros:</h3>
                    <div className="flex gap-10 md:gap-10 justify-center items-center">
                        <img
                            src="https://yxkdixicvsbupkvzjozk.supabase.co/storage/v1/object/public/parallax_public/clients/latin_media_monitor.png"
                            alt="" width={"150"}/>
                        <img
                            src="https://yxkdixicvsbupkvzjozk.supabase.co/storage/v1/object/public/parallax_public/clients/luvora.png"
                            alt="" width={"140"}/>
                    </div>
                </section>
                <section className="mt-5 mb-10 w-full">
                    <h2 className="font-clash text-2xl md:text-5xl text-center text-white font-semibold mb-10 uppercase">Trabajemos juntos!</h2>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <HabilitysTeamComponent
                            name="Roberto Aceves"
                            description="Full Stack Developer"
                            img="https://yxkdixicvsbupkvzjozk.supabase.co/storage/v1/object/public/parallax_public/users/perfil.jpg"
                            link="https://wa.link/ih4iog"
                            habilitys={['Astro.build', 'Javascript', 'PHP', 'Python', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'AWS', 'NODE.JS', 'REACT', 'VUE.JS', 'Laravel', 'Django', 'GitHub', 'Supabase', 'Vercel','React Native','SQL','PostgresSQL',]}/>
                        <HabilitysTeamComponent
                            name="Carlos Aguero"
                            description="Full Stack Developer"
                            img="https://yxkdixicvsbupkvzjozk.supabase.co/storage/v1/object/public/parallax_public/users/carlos_aguero.jpeg?t=2024-07-03T18%3A50%3A12.995Z"
                            link="https://wa.link/ih4iog"
                            habilitys={['.NET','Javascript', 'PHP', 'Angular', 'HTML', 'CSS', 'Azure', 'Bootstrap', 'AWS', 'NODE.JS', 'C#', 'Laravel', 'Unity', 'GitHub', 'Firebase', 'ASP.NET','SQL','PostgresSQL','MongoDB']}/>

                    </div>
                </section>
            </div>
        </Layout>
    )
}
export default Home;