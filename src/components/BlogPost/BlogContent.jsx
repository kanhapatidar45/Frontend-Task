import girlImage from '../../assets/Client-First - IMAGES/photo-of-woman-wearing-eyeglasses-3184405.svg'

const BlogContent = () => {
    return (
        <div className="prose prose-lg max-w-none mx-4 sm:mx-8 lg:mx-16">
            <h1 className="text-4xl font-bold mb-6 text-center sm:text-left">
                Step-by-step guide to choosing great font pairs
            </h1>
            <img
                src={girlImage}
                alt="Blog Header"
                className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            <p className="text-gray-600 mb-8 mx-4 sm:mx-12 lg:mx-56">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h2 className="text-2xl font-bold mb-4 mx-4 sm:mx-12 lg:mx-56">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </h2>
            <p className="text-gray-600 mb-6 mx-4 sm:mx-12 lg:mx-56">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. At risus
                viverra adipiscing at in tellus.
            </p>
            <ul className="list-disc pl-6 mb-6 mx-4 sm:mx-12 lg:mx-56">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Non blandit massa enim nec scelerisque</li>
                <li>Neque egestas congue quisque egestas</li>
            </ul>
            <p className="text-gray-600 mx-4 sm:mx-12 lg:mx-56">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
            </p>
        </div>
    );
};

export default BlogContent;
