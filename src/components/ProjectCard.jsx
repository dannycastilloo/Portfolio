function ProjectCard({ title, poster, logo, description, url }) {
    return (
        <div className='flex flex-col justify-center items-center shadow-lg w-12/12 gap-2 md:w-5/12 lg:w-3/12 rounded-xl bento'>
            <div>
                <img src={poster} alt={title} title={title} />
            </div>
            <div className='px-4 py-5 flex flex-col gap-4'>
                <div className='flex gap-5'>
                    <img src={logo} alt={title} title={title} />
                    <span className="text-xl font-medium text-white">{title}</span>
                </div>

                <p className="text-gray1">{description}</p>

                <a href={url} className="bg-purple1 flex gap-3 justify-center items-center rounded-lg text-white mt-6 py-2 font-medium hover:bg-purple2 cursor-pointer hover:py-3 transition-all duration-500">
                    Visit project
                    <img src="./icons/external_link.svg" alt="See project" title="See project" />
                </a>
            </div>
        </div>
    )
}

export default ProjectCard