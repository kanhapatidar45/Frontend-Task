const TagChip = ({ label }) => {
    return (
        <span className="px-4 py-2 rounded-full border border-gray-200 text-sm hover:bg-gray-50 cursor-pointer">
            {label}
        </span>
    );
};

export default TagChip;