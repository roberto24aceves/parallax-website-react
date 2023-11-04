import logo from '../assets/img/logo.png';
import menuopen from '../assets/img/menu.svg';
import menuclose from '../assets/img/close.svg';
import {Link} from 'react-router-dom';
import { gsap } from "gsap";
const HeaderLayout = () => {
    const handleToggleMenu = () =>{
        let menu = document.getElementById('menu-container');
        let body = document.body;
        if(menu.classList.contains('hidden')){
            body.style.overflow = 'hidden';
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
            body.style.overflow = 'auto';
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
                <div className="flex justify-between items-center px-4 md:px-16">
                    <Link to={"/"}>
                        <img src={logo} className="w-32" alt=""/>
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link to={"/portafolio"} className="btn btn-primary uppercase hidden sm:block">Portafolio</Link>
                        <img onClick={handleToggleMenu} src={menuopen} className="w-10 h-10 cursor-pointer" alt=""/>
                    </div>
                </div>
            </header>
            <section id="menu-container" className="hidden fixed w-screen h-screen top-0 left-0 z-10 bg-pllx-white">
                <div className="flex flex-col justify-between h-full">
                    <div className="flex h-full flex-col justify-between px-4 md:px-16 py-5">
                        <div className="flex justify-end items-center">
                            <div className="flex items-center">
                                <img onClick={handleToggleMenu} src={menuclose} className="w-10 h-10 hover:drop-shadow-pllx-blue transition-all duration-300 cursor-pointer" alt=""/>
                            </div>
                        </div>
                        <nav className="flex">
                            <ul className="flex flex-col justify-center gap-4">
                                <li className="item-nav"><Link onClick={handleToggleMenu} className="hover:text-pllx-white hover:ms-5 hover:bg-pllx-blue transition-all duration-300" to={"/"}>Home</Link></li>
                                <li className="sub_item-nav"><a onClick={handleToggleMenu} className="hover:text-pllx-white hover:ms-5 hover:bg-pllx-blue transition-all duration-300" href="#servicios">Servicios</a></li>
                                <li className="sub_item-nav"><a onClick={handleToggleMenu} className="hover:text-pllx-white hover:ms-5 hover:bg-pllx-blue transition-all duration-300" href="#procesos">Proceso</a></li>
                                <li className="sub_item-nav"><a onClick={handleToggleMenu} className="hover:text-pllx-white hover:ms-5 hover:bg-pllx-blue transition-all duration-300" href="#portafolio">Portafolio</a></li>
                                <li className="sub_item-nav font-medium"><a onClick={handleToggleMenu} className="hover:text-pllx-white hover:ms-5 hover:bg-pllx-blue transition-all duration-300" href="#chateemos">Chattemos!</a></li>
                            </ul>
                        </nav>
                        <div className="flex">
                            <ul className="flex font-clash text-pllx-blue text-xl gap-4">
                                <li><a className="border-b-2 font-medium border-pllx-blue hover:text-pllx-white hover:bg-pllx-blue transition duration-300" href="#">Facebook</a></li>
                                <li><a className="border-b-2 font-medium border-pllx-blue hover:text-pllx-white hover:bg-pllx-blue transition duration-300" href="#">Linkedin</a></li>
                                <li><a className="border-b-2 font-medium border-pllx-blue hover:text-pllx-white hover:bg-pllx-blue transition duration-300" href="#">Email</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default HeaderLayout;