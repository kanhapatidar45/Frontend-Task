import CategoryCard from './CategoryCard';
import business from '../../assets/Client-First - icons/icon.svg';
import economy from '../../assets/Client-First - icons/Icon-1.svg';
import startup from '../../assets/Client-First - icons/Icon (2).svg';
import technology from '../../assets/Client-First - icons/business-and-trade 1.svg';

const Categories = () => {
    const categories = [
        {
            icon: business,  // Use the imported image path directly
            title: 'Business',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            icon: startup,   // Use the imported image path directly
            title: 'Startup',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            icon: economy,   // Use the imported image path directly
            title: 'Economy',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            icon: technology, // Use the imported image path directly
            title: 'Technology',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-8 text-center">All Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                    <CategoryCard key={index} {...category} />
                ))}
            </div>
        </div>
    );
};

export default Categories;
