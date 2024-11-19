/* eslint-disable react/prop-types */
import Button from "../atoms/Button";

const CardHeader = ({ title, btnName, children }) => (
    <div className="card-header">
        <div className="card-header-image"></div>
        <div className="card-header-info">
            <h1>{title}</h1>
            {children}
            <Button label={btnName}/>
        </div>
    </div>
);

export default CardHeader;