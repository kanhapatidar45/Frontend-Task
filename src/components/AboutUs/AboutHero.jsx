import SectionTitle from './SectionTitle';
import StatBox from './StatBox';

const AboutHero = () => {
    const stats = [
        { number: '12', label: 'Blogs Published' },
        { number: '18K', label: 'Views on Finsweet' },
        { number: '30K', label: 'Total active Users' }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionTitle
                            subtitle="About us"
                            title="We are a team of content writers who share their learnings"
                        />
                        <p className="text-gray-600 mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat, index) => (
                                <StatBox key={index} {...stat} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            alt="Team collaboration"
                            className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;