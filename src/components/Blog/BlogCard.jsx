import {Link } from 'react-router-dom'
const BlogCard = ({ category, title, description, image }) => {
  return (
    <Link to='/BlogPost'>

          <div className="flex gap-6 mb-8">
              <img
                  src={image}
                  alt={title}
                  className="w-48 h-48 object-cover rounded-lg flex-shrink-0"
              />
              <div>
                  <div className="text-purple-600 font-medium mb-2 uppercase text-sm">{category}</div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-600">{description}</p>
              </div>
          </div>

    </Link>
    
  );
};

export default BlogCard;
