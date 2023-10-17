const BannerComponent = ({title,subtitle, button, url}) => {
    return (
        <div className="banner">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-4 w-80 w-full sm:w-2/3 xl:w-1/2 font-clash text-white text-center">
                    <h3 className="font-medium text-xl">{subtitle}</h3>
                    <h2 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{title}</h2>
                    <a className="btn btn-banner" href={url}>{button}</a>
                </div>
            </div>
        </div>
    )
}
export default BannerComponent;