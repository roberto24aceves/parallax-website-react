import idefault from '../../assets/img/mockup.png'
const SliderItemComponent = ({title,location}) =>{

    return(
    <div className="w-full group hover:scale-95 transition-all duration-500">
            <img className="w-full object-cover rounded-2xl" src={idefault} alt=""/>
            <div className="flex justify-between py-4 font-switzer">
                <p className="text-pllx-gray-light group-hover:text-white transition-all duration-300">{title}</p>
                <p className="text-white">{location}</p>
            </div>
        </div>
    )
}
export default SliderItemComponent;