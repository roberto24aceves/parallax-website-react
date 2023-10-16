import logo from '../assets/img/logo.png';
import menuopen from '../assets/img/menu.svg';
import menuclose from '../assets/img/close.svg';
export default function HeaderLayout() {
    return (
        <div className="relative">
            <header className="container py-5">
                <div className="flex justify-between items-center px-5 md:px-2">
                    <a href="#">
                        <img src={logo} className="w-32" alt=""/>
                    </a>
                    <div className="flex items-center gap-6">
                        <a href="#" className="btn btn-primary uppercase hidden sm:block">Portafolio</a>
                        <img src={menuopen} className="w-10 h-10 cursor-pointer" alt=""/>
                    </div>
                </div>
            </header>
            <section className="absolute top-0 right-0 z-10 bg-pllx-white w-screen h-screen">
                <div className="container py-5">
                    <div className="flex h-full flex-col justify-between">
                        <div className="flex justify-end items-center px-5 md:px-2">
                            <div className="flex items-center">
                                <img src={menuclose} className="w-10 h-10 cursor-pointer" alt=""/>
                            </div>
                        </div>
                        <div className="flex px-5 md:px-2">
                            <ul className="flex flex-col justify-center h-max">
                                <li className="item-nav">Inicio</li>
                                <li className="item-nav">Servicios</li>
                                <li className="item-nav">Portafolio</li>
                                <li className="item-nav">Contacto</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}