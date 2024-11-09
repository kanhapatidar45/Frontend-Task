const ContentSection = ({ title, content }) => {
    return (
        <div className="max-w-3xl mx-auto my-12">
            {title && (
                <h2 className="text-3xl font-bold mb-6">{title}</h2>
            )}
            <p className="text-gray-700 leading-relaxed">
                {content}
            </p>
        </div>
    );
};

export default ContentSection;