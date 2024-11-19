import PropTypes from 'prop-types';

const ContaintHeader = ({ title, seeAll }) => (
    <div className="card-containt-header">
        <h2>{title}</h2>
        {seeAll ? <p>See All</p> : ''}
    </div>
)

ContaintHeader.propTypes = {
    title: PropTypes.string.isRequired,
    seeAll: PropTypes.bool.isRequired
};

export default ContaintHeader