/* eslint-disable react/prop-types */
import ContaintBody from "../atoms/ContaintBody";
import ContaintHeader from "../atoms/ContaintHeader";

const CardContaint = ({ title, children, classBody = "card-containt-body", seeAll=false }) => (
    <div className="card-containt">
        <ContaintHeader title={title} seeAll={seeAll} />
        <ContaintBody className={classBody}>
            {children}
        </ContaintBody>
    </div>
)

export default CardContaint;