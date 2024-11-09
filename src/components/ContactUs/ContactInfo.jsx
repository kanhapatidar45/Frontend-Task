const ContactInfo = () => {
    return (
        <div className="bg-custom-purple text-white p-8 rounded-lg">
            <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Working hours</h3>
                <p className="text-2xl font-bold mb-2">Monday To Friday</p>
                <p className="text-2xl font-bold mb-2">9:00 AM to 8:00 PM</p>
                <p className="text-gray-200 text-sm md:text-base">
                    Our Support Team is available 24/7
                </p>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                <p className="text-2xl font-bold mb-2">020 7993 2905</p>
                <p className="text-gray-200 text-sm md:text-base">hello@finsweet.com</p>
            </div>
        </div>
    );
};

export default ContactInfo;
