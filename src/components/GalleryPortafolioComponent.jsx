import GalleryPortafolioItemComponent from "./GalleryPortafolio/GalleryPortafolioItemComponent.jsx";
import items from "./../portfolio.jsx"
import {useState} from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const GalleryPortafolioComponent = () =>{
    const [filter,setFilter] = useState(null)
    const handleToBehance = ()=>{
        console.log("Redireccionando a Behance")
        /*
        toast("En 4s seras redireccionado a Behance!🤩",{
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            closeButton: false,
            pauseOnHover: true,
            draggable: true,
        })
        */
        window.open("https://www.behance.net/robertoaceves","_blank")
    }
    return (
        <div className="w-full grid gap-4">
            <div className="flex flex-wrap gap-4">
                <button className="portfolio-nav" onClick={() => setFilter("all")}>Todos</button>
                <button className="portfolio-nav" onClick={() => setFilter("web_desing")}>Diseño Web</button>
                <button className="portfolio-nav" onClick={() => setFilter("web_development")}>Desarrollo Web</button>
                <button className="portfolio-nav" onClick={() => setFilter("ux/ui")}>UX/UI</button>
                <button className="portfolio-nav" onClick={() => setFilter("seo")}>SEO</button>
                <button className="portfolio-nav bg-[#0057ff] flex justify-center items-center gap-2 hover:bg-white hover:text-[#0057ff] focus-visible:bg-white focus-visible:text-[#0057ff]" onClick={handleToBehance}>Go to Behance <IoArrowForwardSharp />
                </button>
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
                                    extract={item.extract}
                                    user={item.user}/>
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