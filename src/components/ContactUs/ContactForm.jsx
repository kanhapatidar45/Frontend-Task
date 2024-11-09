const ContactForm = () => {
    return (
        <form className="space-y-6 w-full  mx-auto">
            <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600">
                <option value="">Query Related</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
            </select>
            <textarea
                placeholder="Message"
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>
            <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 py-4 rounded-md hover:bg-yellow-500 transition-colors"
            >
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
