import HeaderLayout from "./HeaderLayout.jsx";
import FooterLayout from "./FooterLayout.jsx";
import CursorComponent from "../components/CursorComponent.jsx";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

const Layout = ({children }) => {
    return(
        <div className="w-full px-0 overflow-x-hidden relative">
            <HeaderLayout/>
                <div className="container px-4 md:px-16 py-5">
                    {children}
                    <Analytics />
                    <SpeedInsights/>
                </div>
            <FooterLayout/>
        </div>
    )
}
export default Layout;