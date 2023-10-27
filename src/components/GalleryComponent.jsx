import idefault from '../assets/img/mockup.png'
import {useRef, useState} from "react";

const GalleryComponent = () =>{
    const [lastElement,setLastElement] = useState(null);
    const items = [
        {"title":"Proyecto 1"},
        {"title":"Proyecto 2"},
        {"title":"Proyecto 3"},
        {"title":"Proyecto 4"},
        {"title":"Proyecto 5"},
        {"title":"Proyecto 6"},
        {"title":"Proyecto 7"},
        {"title":"Proyecto 8"},
        {"title":"Proyecto 9"}];
    const indicator = useRef(null);
    const container = useRef(null);
    const gitems = document.querySelectorAll('.gallery-item');

    const handleUpdateItems = (e) =>{
        lastElement !== null ? lastElement.style.width = '1.25rem' : null;
        let element = e.target;
        setLastElement(element.parentElement);
        console.log(lastElement);
        element.parentElement.style.width = '400px';
    }
    const handleMoveIndicator = (e) =>{
        let content = container.current;
        let ind = indicator.current;
        ind.style.left = `${e.clientX - content.getBoundingClientRect().left}px`;
    }
    return (
        <div className="relative m-0 p-0 box-border w-full h-[600px]">
            <div ref={container} className="container-gallery" onMouseMove={handleMoveIndicator}>
                <div ref={indicator} className="indicator-gallery"></div>
                <div className="gallery-content">
                    {
                        items.map((item, index) => (
                            <div key={index} className="gallery-item" onMouseEnter={handleUpdateItems}>
                                <img src={idefault} alt=""/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default GalleryComponent;