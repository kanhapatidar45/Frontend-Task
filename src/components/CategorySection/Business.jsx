
import PageHeader from './PageHeader';
import BlogSection from './BlogSection';

import Footer from '../ContactUs/Footer';

const Business = () => {
    return (
        <div className="min-h-screen flex flex-col">
 
            <PageHeader />
            <main className="flex-grow">
                <BlogSection />
            </main>
           
            <Footer />
        </div>
    );
};

export default Business;