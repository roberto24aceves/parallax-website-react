import GalleryPortafolioItemComponent from "./GalleryPortafolio/GalleryPortafolioItemComponent.jsx";
import items from "./../portfolio.jsx"
import {useState} from "react";
import { MdArrowOutward } from "react-icons/md";
const GalleryPortafolioComponent = () =>{
    const [filter,setFilter] = useState(null)
    return (
        <div className="w-full grid gap-4">
            <div className="flex flex-wrap gap-4">
                <div className="portfolio-nav" onClick={() => setFilter("all")}>Todos</div>
                <div className="portfolio-nav" onClick={() => setFilter("web_desing")}>Diseño Web</div>
                <div className="portfolio-nav" onClick={() => setFilter("web_development")}>Desarrollo Web</div>
                <div className="portfolio-nav" onClick={() => setFilter("ux/ui")}>UX/UI</div>
                <div className="portfolio-nav" onClick={() => setFilter("seo")}>SEO</div>
            </div>
            <div className="flex flex-wrap justify-start">
                {
                    items.map((item,index)=>{
                        if(filter === null || filter === "all"){
                            return (
                                <GalleryPortafolioItemComponent
                                    key={index}
                                    img={item.img}
                                    url={item.url}
                                    title={item.name}
                                    extract={item.extract}/>
                            )
                        }else{
                            if(item.cartegory.includes(filter)){
                                return (
                                    <GalleryPortafolioItemComponent
                                        key={index}
                                        img={item.img}
                                        url={item.url}
                                        title={item.name}
                                        extract={item.extract}/>
                                )
                            }
                        }
                    })
                }
            </div>
        </div>
    )
}
export default GalleryPortafolioComponent;