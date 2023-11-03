import idefault from '../assets/img/mockup.png';
import GalleryPortafolioItemComponent from "./GalleryPortafolio/GalleryPortafolioItemComponent.jsx";
const GalleryPortafolioComponent = () =>{
    return (
        <div>
            <div className="category-elements">
                <div className="cItems">Diseño Web</div>
                <div className="cItems">Desarrollo Web</div>
                <div className="cItems">UX/UI</div>
                <div className="cItems">SEO</div>
            </div>
            <div className="flex flex-wrap">
                <GalleryPortafolioItemComponent
                    img=""
                    url="#"
                    title="Permanex"
                    extract="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis harum iure minus nisi? Ullam."/>
                <GalleryPortafolioItemComponent
                    img=""
                    url="#"
                    title="Permanex"
                    extract="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis harum iure minus nisi? Ullam."/>
                <GalleryPortafolioItemComponent
                    img=""
                    url="#"
                    title="Permanex"
                    extract="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis harum iure minus nisi? Ullam."/>
            </div>
        </div>
    )
}
export default GalleryPortafolioComponent;