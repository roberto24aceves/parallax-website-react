const PostItemComponent = ({title,subtitle,description,button,url}) => {
    return (
        <article className="postItem group">
            <div className="flex justify-end w-full sm:-mb-8">
                <a className="btn btn-primary group-hover:bg-pllx-gray-dark" href={url}>{button}</a>
            </div>
            <div className="flex flex-col md:flex-row gap-3 py-5">
                <div className="flex flex-col gap-4 md:w-1/2 xl:w-1/3">
                    <h3 className="text-white font-clash text-lg">{subtitle}</h3>
                    <h2 className="text-white font-clash text-3xl lg:text-5xl line-clamp-3">{title}</h2>
                </div>
                <div className="flex md:justify-end md:items-end md:w-1/2 xl:w-2/3">
                    <p className="text-white font-switzer text-base lg:w-7/12 line-clamp-3 md:line-clamp-6">{description}</p>
                </div>
            </div>
        </article>
    )
}
export default PostItemComponent;