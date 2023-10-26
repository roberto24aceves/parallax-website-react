import SliderItemComponent from "./Slider/SliderItemComponent.jsx";
import {useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const SliderComponent = () =>{
    const items = [{"title":"Proyecto 1"},{"title":"Proyecto 2"},{"title":"Proyecto 3"}];
    const slider = useRef(null)
    const InitAnimate = () =>{
        const slides = slider.current;
        let iSlides = gsap.utils.toArray('.items-slider')

        gsap.to(iSlides,{
            xPercent: -100 * (iSlides.length - 1),
            ease: "none",
            duration: 6,
            scrollTrigger:{
                trigger:document.body,
                pin:true,
                scrub: true,
                markers:true,
                onScrubComplete:{
                    pin:false,
                }
            }
        })
        /*const tScroll = slides.scrollWidth - slides.offsetWidth;*/
        /*gsap.to('.items-slider',{
            x:-slides.scrollWidth,
            scrollTrigger:{
                scroller: '#scroll-slider',
                horizontal:true,
                scrub:true,
                toogleActions:"play none none reverse",
            }
        })*/
    }
    /*const EndAnimate = () =>{
        tl.kill(true);
    }*/
    useEffect(()=>{
        InitAnimate();
    },[]);
    return(
        <div className="relative w-full">
            <div id="scroll-slider" ref={slider} className="flex overflow-x-auto space-x-8 w-full overflow-x-hidden">
                {
                    items.map((item,index)=>(
                        <div key={index} className="flex-shrink-0 w-2/3 items-slider">
                            <SliderItemComponent title={item.title} location="Mérida, Yucatán, México."/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default SliderComponent