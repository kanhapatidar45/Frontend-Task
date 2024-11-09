import SectionTitle from './SectionTitle';

const MissionVision = () => {
    const sections = [
        {
            title: 'Creating valuable content for creatives all around the world',
            subtitle: 'Our Mission',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'A platform that empowers individuals to improve',
            subtitle: 'Our Vision',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ];

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <SectionTitle
                                subtitle={section.subtitle}
                                title={section.title}
                            />
                            <p className="text-gray-600">{section.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionVision;