import HeaderLayout from "./HeaderLayout.jsx";
import FooterLayout from "./FooterLayout.jsx";
import CursorComponent from "../components/CursorComponent.jsx";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

const Layout = ({children }) => {
    return(
        <div className="w-full px-0 overflow-x-hidden relative">
            <HeaderLayout/>
            {children}
            <Analytics />
            <SpeedInsights/>
        </div>
    )
}
export default Layout;