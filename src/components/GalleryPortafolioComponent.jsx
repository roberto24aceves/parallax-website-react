import idefault from '../assets/img/mockup.png';
const GalleryPortafolioComponent = () =>{
    return (
        <div>
            <div className="category-elements">
                <div className="cItems">Diseño Web</div>
                <div className="cItems">Desarrollo Web</div>
                <div className="cItems">UX/UI</div>
                <div className="cItems">SEO</div>
            </div>
            <div className="flex flex-wrap">
                <div className="basis-1/3 py-4 px-3 rounded-xl hover:scale-105 transition-all duration-300">
                    <img className="" src={idefault} alt=""/>
                    <div className="py-4">
                        <h3 className="font-medium font-clash text-2xl text-pllx-white">Permanex</h3>
                        <p className="text-white font-switzer my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis harum iure
                            minus nisi? Ullam.</p>
                        <a className="border-b border-white text-pllx-white font-switzer font-medium mt-5 py-1" href="#">Ver proyecto</a>
                    </div>
                </div>
                <div className="basis-1/3 py-4 px-3 rounded-xl hover:scale-105 transition-all duration-300">
                    <img className="" src={idefault} alt=""/>
                    <div className="py-4">
                        <h3 className="font-medium font-clash text-2xl text-pllx-white">Permanex</h3>
                        <p className="text-white font-switzer my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis harum iure
                            minus nisi? Ullam.</p>
                        <a className="border-b border-white text-pllx-white font-switzer font-medium mt-5 py-1" href="#">Ver proyecto</a>
                    </div>
                </div>
                <div className="basis-1/3 py-4 px-3 rounded-xl hover:scale-105 transition-all duration-300">
                    <img className="" src={idefault} alt=""/>
                    <div className="py-4">
                        <h3 className="font-medium font-clash text-2xl text-pllx-white">Permanex</h3>
                        <p className="text-white font-switzer my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis harum iure
                            minus nisi? Ullam.</p>
                        <a className="border-b border-white text-pllx-white font-switzer font-medium mt-5 py-1" href="#">Ver proyecto</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default GalleryPortafolioComponent;