import logo from '../assets/img/logo.png';
import menuopen from '../assets/img/menu.svg';
export default function HeaderLayout() {
    return (
        <header className="container py-5">
            <div className="flex justify-between items-center">
                <a href="#">
                    <img src={logo} className="w-32" alt=""/>
                </a>
                <div className="flex items-center gap-6">
                    <a href="#" className="btn btn-primary hidden sm:block">Portafolio</a>
                    <img src={menuopen} className="w-10 h-10 cursor-pointer" alt=""/>
                </div>
            </div>
        </header>
    )
}