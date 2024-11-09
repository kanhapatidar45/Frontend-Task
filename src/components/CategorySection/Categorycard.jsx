const CategoryCard = ({ icon, title, className }) => {
    return (
        <div className={`p-4 rounded-lg flex items-center gap-3 cursor-pointer shadow-md shadow-slate-400 hover:bg-custom-yellow ${className} mr-24`}>
            <span className="text-2xl">{icon}</span>
            <span className="font-semibold">{title}</span>
        </div>
    );
};

export default CategoryCard;