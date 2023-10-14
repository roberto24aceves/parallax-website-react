import HeaderLayout from "./layout/HeaderLayout.jsx";
import FooterLayout from "./layout/FooterLayout.jsx";
import BannerComponent from "./components/BannerComponent.jsx";

function App() {
  return (
    <div className="bg-page px-5 sm:px-4 md:px-0">
      <HeaderLayout/>
      <div className="container">
        <BannerComponent subtitle="Chateemos" title="¡Es hora de trabajar juntos!" button="Escribenos un mail" url="#"/>
      </div>
      <FooterLayout/>
    </div>
  )
}

export default App
