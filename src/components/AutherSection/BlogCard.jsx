const BlogCard = ({ image, category, title, description }) => {
    return (
        <div className="bg-white  overflow-hidden  hover:shadow-lg transition-shadow flex flex-row justify-center ml-52">
            <div>

                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
            </div>
           
            <div className="p-6">
                <div className="text-purple-600 font-semibold uppercase text-sm mb-2">
                    {category}
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default BlogCard;