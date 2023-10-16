import logo from '../assets/img/logo.png';
import menuopen from '../assets/img/menu.svg';
import menuclose from '../assets/img/close.svg';
import { gsap } from "gsap";
export default function HeaderLayout() {
    const handleToggleMenu = () =>{
        let menu = document.getElementById('menu-container');
        if(menu.classList.contains('hidden')){
            gsap.to('#menu-container',{
                x:-window.innerWidth,
                opacity:0,
                duration:0,
                onComplete: () =>{
                    menu.classList.remove('hidden');
                    gsap.to('#menu-container',{
                        x:0,
                        opacity:1,
                        duration:.8,
                    })
                }
            })
        }else{
            gsap.to('#menu-container',{
                x:-window.innerWidth,
                opacity:1,
                duration:.8,
                onComplete: () =>{
                    menu.classList.add('hidden');
                }
            })
        }
    }
    return (
        <div>
            <header className="container py-5">
                <div className="flex justify-between items-center px-5 md:px-2">
                    <a href="#">
                        <img src={logo} className="w-32" alt=""/>
                    </a>
                    <div className="flex items-center gap-6">
                        <a href="#" className="btn btn-primary uppercase hidden sm:block">Portafolio</a>
                        <img onClick={handleToggleMenu} src={menuopen} className="w-10 h-10 cursor-pointer" alt=""/>
                    </div>
                </div>
            </header>
            <section id="menu-container" className="hidden fixed w-screen h-screen top-0 left-0 z-10 bg-pllx-white">
                <div className="flex flex-col justify-between h-full">
                    <div className="flex h-full flex-col justify-between px-4 md:px-16 py-5">
                        <div className="flex justify-end items-center">
                            <div className="flex items-center">
                                <img onClick={handleToggleMenu} src={menuclose} className="w-10 h-10 cursor-pointer" alt=""/>
                            </div>
                        </div>
                        <div className="flex">
                            <ul className="flex flex-col justify-center gap-4">
                                <li className="item-nav">Inicio</li>
                                <li className="item-nav">Servicios</li>
                                <li className="item-nav">Portafolio</li>
                                <li className="item-nav">Contacto</li>
                            </ul>
                        </div>
                        <div className="flex">
                            <ul className="flex font-clash text-pllx-blue text-xl gap-4">
                                <li><a className="border-b border-pllx-blue hover:text-pllx-white hover:bg-pllx-blue transition duration-300" href="#">Facebook</a></li>
                                <li><a className="border-b border-pllx-blue hover:text-pllx-white hover:bg-pllx-blue transition duration-300" href="#">Linkedin</a></li>
                                <li><a className="border-b border-pllx-blue hover:text-pllx-white hover:bg-pllx-blue transition duration-300" href="#">Email</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}