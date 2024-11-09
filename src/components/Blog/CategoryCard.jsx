import {Link} from 'react-router-dom'
const CategoryCard = ({ icon, title, description }) => {
    return (
         <Link to="/CategorySection" >

            <div className="p-6 hover:bg-custom-yellow border border-gray-200 hover:shadow-lg transition-shadow rounded-lg">
                {/* Display image using the img tag */}
                <img src={icon} alt={title} className="w-16 h-16 mb-4 mx-auto sm:w-20 sm:h-20 md:w-24 md:h-24" />

                <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
                <p className="text-gray-600 text-sm text-center">{description}</p>
            </div>
                           
        </Link>
      
    );
};

export default CategoryCard;
