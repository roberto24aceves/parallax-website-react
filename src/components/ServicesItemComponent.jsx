const ServicesItemComponent = () =>{
    return(
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row bg-pllx-blue hover:bg-pllx-black group flex px-10 py-8 rounded-xl transition-all duration-300">
            <div className="flex flex-col gap-2 w-full md:w-1/2">
                <h3 className="font-clash font-semibold text-2xl md:text-4xl text-white">Servicios para Webs</h3>
                <p className="font-switzer text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, doloribus eius, eligendi eum incidunt ipsam maiores neque nobis odit possimus soluta suscipit. Fugit, itaque numquam?</p>
                <a className="btn w-fit bg-gradient-to-tl from-pllx-white to-white font-clash font-semibold text-pllx-blue group-hover:text-pllx-gray-dark" href="#">Chateemos!</a>
            </div>
            <div className="flex flex-col w-full md:w-1/2">
                <h4 className="font-clash font-semibold text-xl md:text-2xl text-white">Nuestros servicios</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                    <span className="inline-block bg-pllx-white px-3 py-1 rounded-full text-pllx-blue font-semibold font-switzer group-hover:text-pllx-gray-dark">Diseño UX/UI</span>
                    <span className="inline-block bg-pllx-white px-3 py-1 rounded-full text-pllx-blue font-semibold font-switzer group-hover:text-pllx-gray-dark">Desarrollo Web</span>
                    <span className="inline-block bg-pllx-white px-3 py-1 rounded-full text-pllx-blue font-semibold font-switzer group-hover:text-pllx-gray-dark">Estrategia SEO</span>
                    <span className="inline-block bg-pllx-white px-3 py-1 rounded-full text-pllx-blue font-semibold font-switzer group-hover:text-pllx-gray-dark">Consultoria SEO</span>
                </div>
            </div>
        </div>
    )
}
export default ServicesItemComponent;