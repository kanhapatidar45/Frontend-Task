import BlogCard from './BlogCard';
import team from '../../assets/Client-First - IMAGES/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt-3153201.svg'
import building from '../../assets/Client-First - IMAGES/stained-glass-high-rise-building-1106476.svg'

const BlogGrid = () => {
    const posts = [
        {
            image: building,
            category: 'Business',
            title: 'Font sizes in UI design: The complete guide to follow',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            image: team,
            category: 'Economy',
            title: 'How to build rapport with your web design clients',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8 flex ml-64">My Posts</h2>
            <div className="grid  gap-8">
                {posts.map((post, index) => (
                    <BlogCard key={index} {...post} />
                ))}
            </div>
        </div>
    );
};

export default BlogGrid;