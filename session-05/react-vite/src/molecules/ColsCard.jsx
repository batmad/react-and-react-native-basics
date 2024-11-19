import Button from "../atoms/Button"
import PropTypes from "prop-types"

const ColsCard = ({ date, tags, views }) => (
    <div className="cols-card">
        <p>{date}</p>
        <hr />
        <h4>#{tags}</h4>
        <p>{views} went</p>
        <Button label="View" />
    </div>
)

ColsCard.propTypes = {
    date: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired
};

export default ColsCard