import SliderItemComponent from "./Slider/SliderItemComponent.jsx";
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const SliderComponent = () =>{
    return(
        <div className="relative w-full">
            <div className="flex overflow-x-auto space-x-8 w-full">
                <div className="flex-shrink-0 w-2/3">
                    <SliderItemComponent title="Permanex - Web Desing" location="Mérida, Yucatán, México."/>
                </div>
                <div className="flex-shrink-0 w-2/3">
                    <SliderItemComponent title="Permanex - Web Desing" location="Mérida, Yucatán, México."/>
                </div>
                <div className="flex-shrink-0 w-2/3">
                    <SliderItemComponent title="Permanex - Web Desing" location="Mérida, Yucatán, México."/>
                </div>
            </div>
        </div>
    )
}
export default SliderComponent