const CategoryTag = ({ label }) => {
    return (
        <div className="flex justify-center sm:justify-start mb-4">
            <div className="inline-flex items-center gap-2 bg-yellow-100 px-3 py-1 rounded-full text-sm">
                <span className="text-base sm:text-lg">🚀</span>
                <span className="font-medium">{label}</span>
            </div>
        </div>
    );
};

export default CategoryTag;
