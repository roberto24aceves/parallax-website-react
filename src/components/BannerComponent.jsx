export default function BannerComponent({title,subtitle, button, url}) {
    return (
        <div className="banner group">
            <div className="flex flex-col justify-center items-center">
                <div className="banner-content">
                    <h3 className="group-hover:text-pllx-red">{subtitle}</h3>
                    <h2 className="group-hover:text-pllx-red">{title}</h2>
                    <a className="btn btn-banner group-hover:drop-shadow-pllx group-hover:bg-gradient-to-r from-pllx-red to-pllx-orange group-hover:text-white group-hover:animate-bounce transition-all ease-in-out duration-300" href={url}>{button}</a>
                </div>
            </div>
        </div>
    )
}