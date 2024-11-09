import PropTypes from 'prop-types';

const StatBox = ({ number, label }) => (
    <div className="bg-yellow-400 px-8 py-6 rounded-lg text-center">
        <div className="text-4xl font-bold mb-1">{number}+</div>
        <div className="text-sm">{label}</div>
    </div>
);

StatBox.propTypes = {
    number: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default StatBox;