import SliderItemComponent from "./Slider/SliderItemComponent.jsx";
import {useState,useRef} from "react";
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai';
const SliderComponent = () =>{
    const items = [{"title":"Proyecto 1"},{"title":"Proyecto 2"},{"title":"Proyecto 3"},{"title":"Proyecto 4"},{"title":"Proyecto 5"},{"title":"Proyecto 6"}];
    const refSlider = useRef(null);
    const refContainer = useRef(null);
    const slides = refContainer.current?.children;
    const [currentSlide,setCurrentSlide] = useState(0);

    const handleClickLeft = () =>{
        currentSlide > 0 ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(items.length);
        slides.toArray.forEach((slide)=>{
            console.log(slide);
            slide.style.transform = `translateX(-${currentSlide * 700}px)`;
        });
    }
    const handleClickRight = () =>{
        currentSlide < items.length ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(1);
        slides.toArray.forEach((slide)=>{
            slide.style.transform = `translateX(${currentSlide * 700}px)`;
        });
    }
    return(
        <div ref={refSlider} className="w-full">
            <div ref={refContainer} className="flex gap-5 overflow-hidden">
                {
                    items.map((item,index)=>(
                        <div key={index} className="item-slider flex-shrink-0 w-[700px]">
                            <SliderItemComponent title={item.title} location="Mérida, Yucatán, México."/>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-between items-center">
                <AiOutlineArrowLeft className="hover:scale-50 transition-all duration-300 text-white text-4xl" onClick={handleClickLeft}/>
                <AiOutlineArrowRight className="hover:scale-50 transition-all duration-300 text-white text-4xl" onClick={handleClickRight}/>
            </div>
        </div>
    )
}
export default SliderComponent;