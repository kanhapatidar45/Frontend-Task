import SectionTitle from './SectionTitle';
import TeamMember from './TeamMember';
import lesli from '../../assets/Client-First - IMAGES/content-baker-with-delicious-puff-in-cafeteria-6205509.svg'
import Robert from '../../assets/Client-First - IMAGES/content-unshaven-man-covering-eye-with-yellow-flower-5262459.svg'
import jenny from '../../assets/Client-First - IMAGES/fashion-woman-cute-shoes-5704849.svg'
import guy from '../../assets/Client-First - IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313 (2).svg'
import floyd from '../../assets/Client-First - IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg'
import denial from '../../assets/Client-First - IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg'
import eleana from '../../assets/Client-First - IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083 (2).svg'
import jacod from '../../assets/Client-First - IMAGES/cheerful-young-ethnic-male-millennial-standing-near-stone-wall-and-smiling-6147118.svg'
const TeamSection = () => {
  const team = [
    {
      name: 'Floyd Miles',
      role: 'Content Writer @Company',
      image: floyd
    },
    {
      name: 'Dianne Russell',
      role: 'Content Writer @Company',
      image: denial
    },
    {
      name: 'Jenny Wilson',
      role: 'Content Writer @Company',
      image: jenny
    },
    {
      name: 'Leslie Alexander',
      role: 'Content Writer @Company',
      image: lesli
    },
    {
          name: 'Guy Hawkins',
          role: 'Content Writer @Company',
          image: guy
    },
    {
          name: 'Eleanor Pena',
          role: 'Content Writer @Company',
          image: eleana
    },
    {
          name: 'Robert Fox',
          role: 'Content Writer @Company',
          image: Robert
    },
    {
          name: 'Jacob Janes',
          role: 'Content Writer @Company',
          image: jacod
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="List of Authors"
          alignment="center"
          className="mb-12"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;