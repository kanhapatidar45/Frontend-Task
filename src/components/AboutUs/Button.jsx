import PropTypes from 'prop-types';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-colors';
    const variants = {
        primary: 'bg-yellow-400 text-black hover:bg-yellow-500',
        secondary: 'bg-black text-white hover:bg-gray-800',
        outline: 'border-2 border-gray-900 hover:bg-gray-100'
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
    className: PropTypes.string
};

export default Button;