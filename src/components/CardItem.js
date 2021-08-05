
const CardItem = ({images, name, id, loading, supertype, hp, flavorText, nationalPokedexNumbers}) => {
    return (
            <div className="mx-auto max-w-md  rounded-xl max-h-160 lg:mx-5 my-5 shadow-md overflow-hidden md:max-w-2xl border-4 border-red-400 border-opacity-100">
                <div className="md:flex" key={id}>
                    <div className="md:flex-shrink-0 sm:mx-auto">
                        <img className="md:h-160 sm:h-96 md:w-full object-cover sm:w-64 md:w-150 sm:mx-auto" src={images} key={id} alt={name}/>
                    </div>
                    <div className="p-8 sm:hidden md:block">
                        <div className="uppercase tracking-wide text-lg text-black-700 font-semibold md:py-4 text-center">{name} #{nationalPokedexNumbers}</div>
                        <a href="/" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline md:py-2">Type</a>
                        <p className="bg-yellow-600 w-32 text-center font-bold text-white rounded ">{supertype}</p>
                        <a href="/" className="block mt-1 text-md leading-tight font-medium text-black hover:underline md:py-2">HP</a>
                        <p className="bg-green-400 w-32 text-center font-bold text-white rounded ">{hp}</p>
                        <a href="/" className="block mt-1 text-md leading-tight font-medium text-black hover:underline md:pt-3">Description</a>
                        <p className="mt-2 text-gray-800">{flavorText ?flavorText:'We have no words to describe such a great Pokemon.' }</p>
                    </div>
                </div>
            </div>
        )
}

export default CardItem
