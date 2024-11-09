import PropTypes from 'prop-types';

const SectionTitle = ({ subtitle, title, alignment = 'left', className = '' }) => {
    const alignmentClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    };

    return (
        <div className={`mb-8 ${alignmentClasses[alignment]} ${className}`}>
            {subtitle && (
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">
                    {subtitle}
                </span>
            )}
            <h2 className="mt-2 text-4xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                {title}
            </h2>
        </div>
    );
};

SectionTitle.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    className: PropTypes.string
};

export default SectionTitle;
