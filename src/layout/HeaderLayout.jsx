import images from "../images.jsx";
const HeaderLayout = () => {

    return (
        <div>
            <header className="container py-5">
                <div className="flex justify-between items-center px-4 md:px-16">
                    <a href={"https://parallax.lat"}>
                        <img src={images.logo} className="w-40" alt=""/>
                    </a>
                    <div className="flex flex-row">
                        <div className="hidden lg:flex bg-pllx-black rounded-full flex-row gap-10 py-3 px-10">
                            <a className="item-nav" href={"#banner"}>Inicio</a>
                            <a className="item-nav" href={"#portafolio"}>Portafolio</a>
                            <a className="item-nav" href={"#servicios"}>Servicios</a>
                        </div>
                        <a href={"#contacto"} className="bg-pllx-gray-light hover:bg-pllx-theme transition-all ease-in duration-200 text-pllx-gray-dark font-clash font-black uppercase py-3 px-8 rounded-full inline-block">
                            Contacto
                        </a>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default HeaderLayout;