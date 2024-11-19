/* eslint-disable react/prop-types */

const ContaintBody = ({ children, className = "card-containt-body" }) => (
    <div className={className}>
        {children}
    </div>
)

export default ContaintBody