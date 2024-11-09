const PageHeader = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto text-center px-4">
                <h1 className="text-4xl font-bold mb-4">Business</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore.
                </p>
                <div className="mt-4 text-sm">
                    <span className="text-gray-500">BLOG</span>
                    <span className="mx-2">{'>'}</span>
                    <span className="text-purple-600">BUSINESS</span>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;