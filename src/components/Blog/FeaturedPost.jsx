import menImage from '../../assets/Client-First - IMAGES/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.svg'

const FeaturedPost = () => {
    return (
        <div className="bg-custom-off-white py-12">
            <div className="container mx-auto px-4 md:px-10 lg:px-28">
                <div className="text-sm uppercase tracking-wide text-gray-600 mb-2">FEATURED POST</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Section: Text */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Step-by-step guide to choosing great font pairs</h2>
                        <div className="text-gray-600 mb-4">
                            By John Doe | May 23, 2022
                        </div>
                        <p className="text-gray-600 mb-6">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                        <button className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500">
                            Read More →
                        </button>
                    </div>

                    {/* Right Section: Image */}
                    <div>
                        <img
                            src={menImage}
                            alt="Featured Post"
                            className="w-full h-[250px] md:h-[300px] object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedPost;
