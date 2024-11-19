/* eslint-disable react/prop-types */

const CardGroup = ({ children }) => (
    <div className="card-group">
    <div className="card-group-image"></div>
    <div className="card-group-info">
        {children}
    </div>
</div>
)

export default CardGroup