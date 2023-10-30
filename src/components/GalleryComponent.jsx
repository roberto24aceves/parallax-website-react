import idefault from '../assets/img/mockup.png'
import {useRef, useState} from "react";

const GalleryComponent = () =>{
    const items = [
        {"title":"Proyecto 1"},
        {"title":"Proyecto 2"},
        {"title":"Proyecto 3"},
        {"title":"Proyecto 4"},
        {"title":"Proyecto 5"},
        {"title":"Proyecto 6"},
        {"title":"Proyecto 7"},
        {"title":"Proyecto 8"},
        {"title":"Proyecto 9"},
        {"title":"Proyecto 10"},
        {"title":"Proyecto 11"},
        {"title":"Proyecto 12"},
        {"title":"Proyecto 13"},
        {"title":"Proyecto 14"},
        {"title":"Proyecto 15"},
        {"title":"Proyecto 16"},
        {"title":"Proyecto 17"},
        {"title":"Proyecto 18"}];
    const indicator = useRef(null);
    const container = useRef(null);
    const handleMoveIndicator = (e) =>{
        let content = container.current;
        let ind = indicator.current;
        ind.style.left = `${e.clientX - content.getBoundingClientRect().left}px`;
    }
    return (
        <div className="relative m-0 p-10 box-border w-full h-[600px]">
            <div ref={container} className="container-gallery" onMouseMove={handleMoveIndicator}>
                <div ref={indicator} className="indicator-gallery"></div>
                <div className="gallery-content">
                    {
                        items.map((item, index) => (
                            <div key={index} className="gallery-item hover:w-96">
                                <img className="" src={idefault} alt=""/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default GalleryComponent;