import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-sm text-gray-600">Contact Us</p>
                    <h1 className="text-4xl font-bold mb-4">Let's Start a Conversation</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim.
                    </p>
                </div>
                <div className="grid   gap-8 max-w-4xl mx-auto">
                    {/* Contact Information and Form stacked on small screens and side-by-side on medium and larger screens */}
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;
