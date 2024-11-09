import PropTypes from 'prop-types';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import {Link} from 'react-router-dom'

const TeamMember = ({ name, role, image }) => {

    return (
        <Link to='/AutherSection'>
            <div className="bg-custom-off-white rounded-lg p-6 text-center hover:bg-custom-light-beige">
                <img
                    src={image}
                    alt={name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-gray-600 text-sm mb-4">{role}</p>
                <div className="flex justify-center space-x-4">
                    <SocialLink Icon={Facebook} href="#" />
                    <SocialLink Icon={Twitter} href="#" />
                    <SocialLink Icon={Instagram} href="#" />
                </div>
            </div>
        </Link>
     
    );
};

const SocialLink = ({ Icon, href }) => (
    <a
        href={href}
        className="text-gray-400 hover:text-gray-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
    >
        <Icon size={20} />
    </a>
);

TeamMember.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

SocialLink.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    href: PropTypes.string.isRequired
};

export default TeamMember;