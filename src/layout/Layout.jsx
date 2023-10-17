import HeaderLayout from "./HeaderLayout.jsx";
import FooterLayout from "./FooterLayout.jsx";

export default function Layout({children }){
    return(
        <div className="max-h-screen px-0">
            <HeaderLayout/>
                <div className="container px-4 md:px-16 py-5">
                    {children}
                </div>
            <FooterLayout/>
        </div>
    )
}