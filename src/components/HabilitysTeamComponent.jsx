import { MdArrowForward } from "react-icons/md";

const HabilitysTeamComponent = ({ habilitys, img, name, description, link }) => {
    return (
        <div className="bg-pllx-white p-8 lg:p-5 rounded-xl w-full flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-10 w-full md:w-full lg:w-1/2 xl:w-2/3">
                <img src={img} alt={name} className="w-36 h-36 md:w-40 md:h-40 rounded-full"/>
                <div className="w-full lg:w-2/4 xl:w-2/3 text-pllx-black">
                    <h2 className="font-clash text-2xl md:text-4xl font-semibold">{name}</h2>
                    <p className="font-switzer my-2">{description}</p>
                    <a className="flex justify-center items-center gap-2 w-[170px] bg-gradient-to-br from-pllx-theme to-pllx-accent rounded-full text-white px-3 py-2" target="_blank" href={link}>
                        <span>Enviar mensaje</span> <MdArrowForward style={{fontSize:"16pt"}} />
                    </a>
                </div>
            </div>
            <div className="w-full md:w-full lg:w-1/2 xl:w-1/3">
                <h3 className="font-clash font-semibold uppercase text-pllx-black mt-5 lg:mt-0">Habilidades:</h3>
                <div className=" flex flex-wrap gap-3 mt-2">
                    {
                        habilitys.map((hability, index) => (
                            <span className="bg-gradient-to-r from-pllx-theme to-pllx-accent py-1 px-3 rounded-xl text-white font-switzer font-medium text-sm hover:drop-shadow-pllx-blue transition-all duration-300 cursor-pointer" key={index}>{hability}</span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default HabilitysTeamComponent;