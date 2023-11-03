
import BannerComponent from "../components/BannerComponent.jsx";
import PortafolioItemComponent from "../components/PortafolioItemComponent.jsx";
import PostItemComponent from "../components/PostItemComponent.jsx";
import Layout from "../layout/Layout.jsx";
import SliderComponent from "../components/SliderComponent.jsx";
import GalleryComponent from "../components/GalleryComponent.jsx";
import GalleryPortafolioComponent from "../components/GalleryPortafolioComponent.jsx";
import PreviewProjectsComponent from "../components/PreviewProjectsComponent.jsx";
import AccordionComponent from "../components/AccordionComponent.jsx";
import TextScrollComponent from "../components/TextScrollComponent.jsx";

const Components = () => {
  return (
      <Layout>
          <div className="flex flex-col justify-center items-center gap-8">
              <SliderComponent/>
              <TextScrollComponent text="Parallax Web Studio"/>
              <GalleryPortafolioComponent/>
              <PostItemComponent
              url="#"
              button="Más información"
              title="Desarrollo profesional de sitios web y eCommerce"
              subtitle="Desarrollo y diseño web"
              description="Nos especializamos en el desarrollo de sitios web y eCommerce profesionales que ayudan a nuestros clientes a impulsar su presencia en línea y a aumentar sus ventas."/>
              <PostItemComponent
                  url="#"
                  button="Ver más"
                  title="Costos y calidad en el desarrollo web: ¿Qué esperar?"
                  subtitle="6 de febrero de 2023"
                  description="El desarrollo web es una inversión importante para cualquier empresa que quiera tener una presencia en línea sólida. Sin embargo, los costos y la calidad"/>

              <AccordionComponent/>
              <BannerComponent
                  subtitle="Chateemos"
                  title="¡Es hora de trabajar juntos!"
                  button="Escribenos un mail"
                  url="#"/>
              <GalleryComponent/>
              <PortafolioItemComponent
                  url="#"
                  image=""
                  title="Diseño y desarrollo de el sitio web de Permanex"
                  date="10 de marzo de 2021"/>
          </div>
      </Layout>
  )
}

export default Components
