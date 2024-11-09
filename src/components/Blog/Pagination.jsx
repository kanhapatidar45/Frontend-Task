const Pagination = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-center gap-4 py-8">
            <button className="px-4 py-2 border rounded hover:bg-gray-50 w-full sm:w-auto">
                ← Prev
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-50 w-full sm:w-auto">
                Next →
            </button>
        </div>
    );
};

export default Pagination;
