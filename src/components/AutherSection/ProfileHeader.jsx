import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import andreq from '../../assets/Client-First - IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984 (2).svg'


const ProfileHeader = () => {
    return (
        <div className="bg-custom-off-white container mx-auto py-16 px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
                <img
                    src={andreq}
                    alt="Andrew Johnson"
                    className="w-64 h-64 rounded-lg object-cover"
                />
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold mb-4">
                        Hey there, I'm Andrew Johnson and welcome to my Blog
                    </h1>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
                        viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                    </p>
                    <div className="flex gap-4">
                        <IconButton color="primary"><FacebookIcon /></IconButton>
                        <IconButton color="primary"><TwitterIcon /></IconButton>
                        <IconButton color="primary"><InstagramIcon /></IconButton>
                        <IconButton color="primary"><LinkedInIcon /></IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;