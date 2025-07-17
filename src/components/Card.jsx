// eslint-disable-next-line react/prop-types
export default function Card({image, title = 'Unknown Meal', description}) {
    return (
        <div className="flex  items-center min-h-screen">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white max-w-sm">
                <img className="w-full h-48 object-cover"
                    src={image}
                    alt="Grilled Salmon"
                />
                <div className="px-6 py-4">
                    <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
            </div>
        </div>

    )
}