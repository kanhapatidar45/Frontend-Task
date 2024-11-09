import RelatedPost from './RelatedPost';
import business from '../../assets/Client-First - IMAGES/photo-of-people-doing-handshakes-3183197.svg';
import dummy from '../../assets/Client-First - IMAGES/photo-of-woman-looking-at-man-3183173.svg';
import economy from '../../assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533.svg';

const RelatedPosts = () => {
    const posts = [
        {
            image: economy,
            date: 'Aug 23, 2021',
            author: 'John Doe',
            title: 'A UX Case Study Creating a Studious Environment for Students',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            image: business,
            date: 'Aug 23, 2021',
            author: 'John Doe',
            title: 'A UX Case Study Creating a Studious Environment for Students',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            image: dummy,
            date: 'Aug 23, 2021',
            author: 'John Doe',
            title: 'A UX Case Study Creating a Studious Environment for Students',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
    ];

    return (
        <section className="py-16 bg-gray-50 shadow-sm shadow-slate-200">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8 text-center sm:text-left">
                    What to read next
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <RelatedPost key={index} {...post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelatedPosts;
