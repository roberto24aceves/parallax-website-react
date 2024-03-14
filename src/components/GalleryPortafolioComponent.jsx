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
                    url=""
                    title="Permanex"
                    extract="Diseño UX / Diseño UI / Desarrollo web."/>
                {/*<GalleryPortafolioItemComponent
                    img=""
                    url=""
                    title="Latin Media Monitor"
                    extract=""/>*/}
            </div>
        </div>
    )
}
export default GalleryPortafolioComponent;