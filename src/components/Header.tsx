
const HeaderSection: React.FC = () => {

    const MyNewFavoriteColor = "#E04534";


    return (
        <div className="max-w-8xl mx-auto">      
            <div className="w-full mx-auto flex flex-row items-center text-left mt-2 ml-4 gap-5">
        
                {/* Map Pin Icon */}
                <div className="basis-1/8">
                    <a href="" target="_blank" rel="noopener noreferrer" className="group">
                        <svg className="w-10 h-10 text-[#3696E3] group-hover:fill-blue-400 transition" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd"/>
                        </svg>
                    </a>
                </div>

                {/* Page Header */}
                <h1 className="basis-7/8 text-3xl font-light">The United Stats Project</h1>
            </div>

            <hr className="max-w-8xl h-0.5 mx-auto my-4 mr-5 ml-5 bg-gray-200 border-0 rounded-med"/>
        </div>
    )
};

export default HeaderSection;