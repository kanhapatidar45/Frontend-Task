// 

import BlogCard from './BlogCard';
import startup from '../../assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg';
import business from '../../assets/Client-First - IMAGES/photo-of-people-doing-handshakes-3183197.svg';
import dummy from '../../assets/Client-First - IMAGES/photo-of-woman-looking-at-man-3183173.svg';
import technology from '../../assets/Client-First - IMAGES/photo-of-people-walking-on-hallway-3182811.svg';
import economy from '../../assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533.svg';

const BlogList = () => {
    const posts = [
        {
            category: 'STARTUP',
            title: 'Design tips for designers that cover everything you need',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
            image: startup,
            id: 1
        },
        {
            category: 'BUSINESS',
            title: 'How to build rapport with your web design clients',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
            image: business,
            id: 2
        },
        {
            category: 'STARTUP',
            title: 'Logo design trends to avoid in 2022',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
            image: dummy,
            id: 3
        },
        {
            category: 'TECHNOLOGY',
            title: '8 Figma design systems you can download for free today',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
            image: technology,
            id: 4
        },
        {
            category: 'ECONOMY',
            title: 'Font Size in UI Design : The Complete Guide to Follow',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
            image: economy,
            id: 5
        }
    ];

    return (
        <div className="container mx-auto px-4 md:px-10 lg:px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">All posts</h2>
            <div className="flex flex-col gap-6">
                {posts.map((post) => (
                    <BlogCard key={post.id} {...post} />
                ))}
            </div>
        </div>
    );
};

export default BlogList;
