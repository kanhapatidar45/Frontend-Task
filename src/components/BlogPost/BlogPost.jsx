import AuthorInfo from './AutherInfo';
import CategoryTag from './CategoryTag';
import BlogContent from './BlogContent';
import RelatedPosts from './RelatedPosts';
import JoinTeam from '../AboutUs/JoinTeam';
import Footer from '../ContactUs/Footer';

const BlogPost = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <AuthorInfo />
                    <CategoryTag label="Startup" />
                    <BlogContent />
                </article>
                <RelatedPosts />
                <JoinTeam />
            </main>
            <Footer />
        </div>
    );
};

export default BlogPost;
