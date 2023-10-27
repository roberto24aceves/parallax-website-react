import SliderItemComponent from "./Slider/SliderItemComponent.jsx";
import {useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const SliderComponent = () =>{
    const items = [{"title":"Proyecto 1"},{"title":"Proyecto 2"},{"title":"Proyecto 3"},{"title":"Proyecto 1"},{"title":"Proyecto 1"},{"title":"Proyecto 1"}];
    const refSlider = useRef(null);
    const refContainer = useRef(null);
    const tl = gsap.timeline();
    const InitAnimate = () =>{
        const slider = refSlider.current;
        const container = refContainer.current;
        let slides = gsap.utils.toArray('.items-slider');
        let tScroll = container.scrollWidth - container.offsetWidth;

        tl.add(gsap.to(slides ,{
            x: ()=>-tScroll,
            ease: 'none',
            scrollTrigger:{
                id:'slider',
                trigger: slides,
                scrub: 1,
                pin:true,
                markers: true,
                start: 'top top',
                end: ()=> '+='+tScroll
            }
        }))
    }
    useEffect(()=>{
        InitAnimate();
    },[]);
    return(
        <div id="slider" ref={refSlider} className="w-full">
            <div ref={refContainer} className="flex flex-row gap-5 overflow-hidden">
                {
                    items.map((item,index)=>(
                        <div key={index} className="flex-shrink-0 w-[700px] items-slider">
                            <SliderItemComponent title={item.title} location="Mérida, Yucatán, México."/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default SliderComponent