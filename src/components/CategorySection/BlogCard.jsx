const BlogCard = ({ image, category, title, description }) => {
    return (
        <div className="flex flex-col md:flex-row gap-6 mb-8 ml-16">
            <img
                src={image}
                alt={title}
                className="w-full md:w-64 h-48 object-cover rounded-lg"
            /> 
            <div className="mx-">
                <div className="text-purple-600 font-semibold mb-2">{category}</div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default BlogCard;