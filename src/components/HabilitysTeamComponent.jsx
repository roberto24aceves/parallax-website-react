const HabilitysTeamComponent = ({ habilitys }) => {
    return (
        <div className="bg-pllx-black py-8 px-5 rounded-xl w-full flex flex-wrap items-center justify-between">
            <div className="w-full md:w-1/2 lg:w-2/3 md:pr-4 lg:pr-8">
                <h2 className="font-clash text-2xl md:text-4xl font-semibold text-white">Nuestra Experiencia</h2>
                <p className="font-switzer text-white my-2">Cada persona en este equipo se ha especialidado en diferentes habilidades unicas, nosotros tuvimos la dicha de conocernos y crear algo unico, con estilo y escencia.</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
                <h3 className="font-clash font-semibold text-white">Capacidades</h3>
                <div className=" flex flex-wrap gap-3 mt-2">
                    {
                        habilitys.map((hability, index) => (
                            <span className="bg-pllx-gray-light py-1 px-3 rounded-xl text-white font-switzer font-medium text-sm hover:drop-shadow-pllx-blue transition-all duration-300 cursor-pointer" key={index}>{hability}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default HabilitysTeamComponent;