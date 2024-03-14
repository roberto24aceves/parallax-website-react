import HeaderLayout from "./HeaderLayout.jsx";
import FooterLayout from "./FooterLayout.jsx";
import CursorComponent from "../components/CursorComponent.jsx";
import { Analytics } from '@vercel/analytics/react';

const Layout = ({children }) => {
    return(
        <div className="w-full px-0 overflow-x-hidden relative">
            <HeaderLayout/>
                <div className="container px-4 md:px-16 py-5">
                    {children}
                    <Analytics />
                </div>
            <FooterLayout/>
        </div>
    )
}
export default Layout;