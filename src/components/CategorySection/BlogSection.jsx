import BlogCard from "./BlogCard";
import TagChip from "./TagChip";
import CategoryCard from "./Categorycard";
import Business from '../../assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533.svg'
const BlogSection = () => {
    const posts = [
        {
            image: Business,
            category: 'BUSINESS',
            title: 'Top 6 free website mockup tools 2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
        },
        {
            image: Business,
            category: 'BUSINESS',
            title: 'Step-by-step guide to choosing great font pairs',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
        },
        {
            image: Business,
            category: 'BUSINESS',
            title: 'Ten free foogle fonts that you should use',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
        },
        {
            image: Business,
            category: 'BUSINESS',
            title: 'What did I learn from doing 50+ design sprints?',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
        }
    ];

    const categories = [
        { icon: '🚀', title: 'Startup', className: 'bg-white' },
        { icon: '💼', title: 'Business', className: 'bg-white' },
        { icon: '📈', title: 'Economy', className: 'bg-white' },
        { icon: '💻', title: 'Technology', className: 'bg-white' }
    ];

    const tags = ['Business', 'Experience', 'Screen', 'Technology', 'Marketing', 'Life'];

    return (
        <div className="container mx-auto py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    {posts.map((post, index) => (
                        <BlogCard key={index} {...post} />
                    ))}
                </div>
                <div>
                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4">Categories</h3>
                        <div className="space-y-2">
                            {categories.map((category, index) => (
                                <CategoryCard key={index} {...category} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">All Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <TagChip key={index} label={tag} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;