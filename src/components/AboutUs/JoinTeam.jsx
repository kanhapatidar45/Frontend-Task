import Button from './Button';
import SectionTitle from './SectionTitle';

const JoinTeam = () => {
    return (
        <section className="py-16 ">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <SectionTitle
                    title="Join our team to be a part of our story"
                    alignment="center"
                />
                <p className="text-gray-600 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt.
                </p>
                <Button variant="primary" className="px-6 py-3 text-lg">
                    Join Now
                </Button>
            </div>
        </section>
    );
};

export default JoinTeam;
