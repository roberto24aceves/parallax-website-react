import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home.jsx";
import Page404 from "./routes/Page404.jsx";
const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="*" element={ <Page404 /> } />
            </Routes>
        </>
    );
}
export default App