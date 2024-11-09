const PageHeader = ({ title, lastUpdated }) => {
    return (
        <div className="text-center py-16 -mx-48 bg-gradient-to-b from-purple-50 bg-custom-off-white">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            {lastUpdated && (
                <p className="text-gray-600">Last Updated on {lastUpdated}</p>
            )}
        </div>
    );
};

export default PageHeader;