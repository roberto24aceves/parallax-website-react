import GalleryPortafolioItemComponent from "./GalleryPortafolio/GalleryPortafolioItemComponent.jsx";
import items from "./../portfolio.jsx"
import {useState} from "react";
const GalleryPortafolioComponent = () =>{
    const [filter,setFilter] = useState(null)
    return (
        <div className="w-full">
            <div className="category-elements">
                <div className="cItems" onClick={() => setFilter("all")}>Todos</div>
                <div className="cItems" onClick={() => setFilter("web_desing")}>Diseño Web</div>
                <div className="cItems" onClick={() => setFilter("web_development")}>Desarrollo Web</div>
                <div className="cItems" onClick={() => setFilter("ux/ui")}>UX/UI</div>
                <div className="cItems" onClick={() => setFilter("seo")}>SEO</div>
            </div>
            <div className="flex flex-wrap justify-center">
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