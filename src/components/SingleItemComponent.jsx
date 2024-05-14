import {motion} from 'framer-motion';
const SingleItemComponent = ({title,subtitle,description,button,url}) =>{
    return (
        <motion.div whileHover={{scale:1.025,rotate:1}} className="flex flex-col gap-1 p-5 bg-pllx-white rounded-xl w-full md:w-[500px] hover:drop-shadow-pllx-theme cursor-pointer">
            <div className="flex justify-end">
                <span className="text-sm font-clash font-medium text-pllx-gray-dark bg-gradient-to-tr from-pllx-theme to-pllx-accent px-4 py-2 rounded-xl drop-shadow-pllx-blue">{subtitle}</span>
            </div>
            <h3 className="font-clash font-semibold text-2xl">{title}</h3>
            <p className="font-switzer">{description}</p>
            <a className="inline-block w-fit bg-gradient-to-r from-pllx-gray to-pllx-gray-dark py-2 px-6 rounded-xl drop-shadow-pllx-gray text-white font-medium font-switzer" href={url}>{button}</a>
        </motion.div>
    )
}
export default SingleItemComponent;