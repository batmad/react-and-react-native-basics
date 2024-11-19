/* eslint-disable react/prop-types */

const Paragraph = ({ children, className = "" }) => (
    <p className={className}>{children}</p>
);

export default Paragraph;