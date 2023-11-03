import {useState} from "react";
import { Client } from "@hubspot/api-client";

const FormContactComponent = () =>{
    const hubspotClient = new Client({ accessToken: "Bearer pat-na1-b4c66ffe-7d92-477a-ac8b-503caaa1c6e5" });
    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const contact = {
            "properties": {
                "firstname": name,
                "phone": phone,
                "lastname": lastName,
                "email": email,
                "message": message
            }
        }
        const allContacts = await hubspotClient.crm.contacts.getAll()
        console.log(allContacts);

    }
    return(
        <div>
            <div className="flex flex-col justify-center items-center mb-4">
                <h3 className="text-center text-white font-clash font-semibold text-4xl drop-shadow-pllx-blue">Chattemos!</h3>
                <p className="font-switzer text-white text-center w-2/3">
                    Todos los campos son obligatorios, los señalados con (<span className="text-pllx-blue">**</span>) al menos uno de ellos
                </p>
            </div>
            <form className="flex flex-col flex-wrap w-full gap-3">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-x-3 gap-y-1">
                    <div className="w-full">
                        <label className="block font-switzer text-pllx-white font-medium text-sm" htmlFor="name">Nombre</label>
                        <input className="inputs" type="text" onChange={(e)=>{setName(e.target.value)}} name="name" value={name}/>
                    </div>
                    <div className="w-full mt-2 sm:mt-0">
                        <label className="block font-switzer text-pllx-white font-medium text-sm" htmlFor="last_name">Apellido</label>
                        <input className="inputs" type="text" name="last_name" onChange={(e)=>{setLastName(e.target.value)}} value={lastName}/>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-x-3 gap-y-1">
                    <div className="w-full">
                        <label className="block font-switzer text-pllx-white font-medium text-sm" htmlFor="email">Telefono</label>
                        <input className="inputs" type="text" name="phone" onChange={(e)=>{setPhone(e.target.value)}} value={phone}/>
                        <p className="text-[12px] text-pllx-white font-clash mt-1">
                            Escribe tu telefono de contacto.
                        </p>
                    </div>
                    <div className="w-full mt-2 sm:mt-0">
                        <label className="block font-switzer text-pllx-white font-medium text-sm" htmlFor="email">Correo</label>
                        <input className="inputs" type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                        <p className="text-[12px] text-pllx-white font-clash mt-1">
                            Escribe tu correo electronico.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <div className="w-full">
                        <label className="block font-switzer text-pllx-white font-medium text-sm" htmlFor="message">Mensaje</label>
                        <textarea className="inputs" name="message" cols="30" rows="5" onChange={(e)=>{setMessage(e.target.value)}} value={message}></textarea>
                        <p className="text-[12px] text-pllx-white font-clash mt-1">
                            Hablanos un poco de ti, o de como podemos ayudarte.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <button onClick={handleSubmit} type="submit" className="btn bg-gradient-to-r from-pllx-blue to-indigo-800 w-full text-white font-clash font-medium hover:drop-shadow-pllx-blue transition-all duration-300">Quiero ser contactado</button>
                </div>
            </form>
        </div>
    )
}
export default FormContactComponent;