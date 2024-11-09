import andrew from '../../assets/Client-First - IMAGES/Image.svg'

const AuthorInfo = () => {
    return (
        <div className="flex items-center gap-4 mb-4 justify-center sm:justify-start sm:gap-6">
            <img
                src={andrew}
                alt="Andrew Jonson"
                className="w-12 h-12 rounded-full"
            />
            <div>
                <h2 className="font-semibold text-center sm:text-left">Andrew Jonson</h2>
                <p className="text-sm text-gray-600 text-center sm:text-left">Posted on 27th January 2022</p>
            </div>
        </div>
    );
};

export default AuthorInfo;
