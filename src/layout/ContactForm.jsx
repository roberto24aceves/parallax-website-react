import {HiArrowRight} from "react-icons/hi2";
import {useState} from "react";
import { HiXMark, HiMiniCheck } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";




const ContactForm = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState([])
    const [success, setSuccess] = useState(false)
    const AlertError = ({message}) => {
        return (
            <span
                className="animate-fadeIn rounded-full ps-[4px] pe-[15px] py-[2px] bg-red-500 text-red-200 flex flex-row justify-center items-center gap-2 w-fit text-sm">
                    <div className="flex justify-center items-center bg-red-200 text-red-200 w-4 h-4 rounded-full">
                        <IoCloseSharp size="20px" className="text-red-500 font-medium"/>
                    </div>
                    <p className="text-red-200 text-xs sm:text-sm font-clash">{message}</p>
                </span>
        )
    }
    const AlertSuccess = ({message}) => {
        return (
            <span className="animate-fadeIn rounded-full ps-[4px] pe-[15px] py-[2px] bg-lime-200 text-green-600 flex flex-row justify-center items-center gap-2 w-fit text-sm">
                <div
                    className="flex justify-center items-center bg-lime-600 text-green-200 w-4 h-4 rounded-full">
                    <FaCheck size="11px" className="text-lime-200"/>
                </div>
                <p className="text-lime-600 text-xs sm:text-sm font-clash">{message}</p>
            </span>
        )
    }
    const handleSendEmail = async () => {
        const response = await fetch("https://metrikads-api-ten.vercel.app/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                phone,
                email,
                message
            })
        })
        const data = await response.json()
        if (data.status === 200) {
            setName("")
            setPhone("")
            setEmail("")
            setMessage("")
            setSuccess(true)
        }

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let instanceError = []
        let reguexPhone = /^\+?\d{2,14}$/;
        let reguexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        let reguexName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        //let reguexMessage = /^[a-zA-Z0-9.,;:áéíóúÁÉÍÓÚñÑüÜ]+$/;
        reguexPhone.test(phone) ? true : instanceError.push("El telefono no es valido")
        reguexEmail.test(email) ? true : instanceError.push("El correo no es valido")
        reguexName.test(name) ? true : instanceError.push("El nombre no es valido")
        message.length <= 1000 && message.length >= 3 ? true : instanceError.push("El mensaje debe contener almenos 3 caracteres")
        setError(instanceError)
        instanceError.length === 0 ? await handleSendEmail() : false
    }
    return (
        <form className="flex flex-col gap-4 w-full md:w-5/6 lg:w-3/4 xl:w-3/6">
            <div className="flex flex-col md:flex-row gap-4 w-full">
                <label htmlFor="name" className="w-full md:w-1/2">
                    <input type="text" name="name" min="3" placeholder="Nombre" className="w-full" value={name}
                           onChange={(e) => setName(e.target.value)}/>
                </label>
                <label htmlFor="phone" className="w-full md:w-1/2">
                    <input type="number" name="phone" min="3" max="10" placeholder="Telefono" className="w-full"
                           value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </label>
            </div>
            <label htmlFor="name">
                <input type="text" name="email" min="3" placeholder="Correo" className="w-full" value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <textarea name="message" cols="30" rows="5" placeholder="Mensaje" value={message}
                      onChange={(e) => setMessage(e.target.value)}>
                        </textarea>
            <span className="flex flex-wrap gap-2">
                    {
                        error.length > 0 && error.map((err, index) => <AlertError key={index} message={err}/>)
                    }
                {
                    success && <AlertSuccess message="Mensaje enviado con exito"/>
                }
                </span>
            <div className="w-full flex flex-row gap-3">
                <button onClick={handleSubmit}
                        className="bg-pllx-theme hover:bg-pllx-gray-light transition-all duration-200 ease-out text-pllx-gray-dark font-clash font-black uppercase py-3 px-8 rounded-full inline-block w-full md:w-fit">Enviar
                </button>
            </div>
        </form>
    )
}
export default ContactForm