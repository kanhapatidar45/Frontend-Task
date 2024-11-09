import FeaturedPost from './FeaturedPost';
import BlogList from './BlogList';
import Categories from './Categories';
import Pagination from './Pagination';
import JoinTeam from '../AboutUs/JoinTeam';
import Footer from '../ContactUs/Footer';


const BlogListing = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Main content section */}
            <main className="flex-grow px-4 md:px-6 lg:px-10">
                {/* Featured Post */}
                <FeaturedPost/>

                {/* Blog List */}
                <BlogList />

                {/* Pagination */}
                <Pagination />

                {/* Categories Section */}
                <Categories />

                {/* Join Our Team Section */}
                <JoinTeam />
            </main>

            {/* Footer stays at the bottom */}
            <Footer />
        </div>
    );
};

export default BlogListing;
