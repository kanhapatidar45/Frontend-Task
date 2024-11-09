const RelatedPost = ({ image, date, author, title, description }) => {
    return (
        <div className="flex flex-col">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="text-sm text-gray-600 mb-2">
                By {author} | {date}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default RelatedPost;  // Correct export statement
