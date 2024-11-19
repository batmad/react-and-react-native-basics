import CardContaint from "../molecules/cardContaint";
import Paragraph from "../atoms/Paragraph";
import ColsCard from "../molecules/ColsCard";
import CardGroup from "../molecules/CardGroup";

const CardBody = () => (
    <div className="card-body">
        <CardContaint title="Next Meetup">
            <h2>Awesome meetup and event</h2>
            <Paragraph className="date">25 January 2019</Paragraph>

            <Paragraph>Hello, JavaScript & Node.js Ninjas!</Paragraph>
            <Paragraph>Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!</Paragraph>
            <Paragraph>The meetup format will contain some short stories and technical talks.</Paragraph>
            <Paragraph>Hello, JavaScript & Node.js Ninjas!</Paragraph>
            <Paragraph>If you have a short announcement you&apos;d like to share with the audience, you may do so during open mic announcements</Paragraph>

            <Paragraph className="line-spacing">Remember to bring a photo ID to get through building security.</Paragraph>
            <Paragraph className="line-spacing">- - - - -</Paragraph>
            <Paragraph className="line-spacing">See you there!</Paragraph>
            <Paragraph className="line-spacing">Best, Hengki, Giovanni, Sofian, Riza, Agung - The JakartaJS Organizers</Paragraph>
        </CardContaint>

        <CardContaint title="Next Meetup" classBody="card-containt-body-secondary">
            <Paragraph>Come and meet other developers interested in the Javascript and its library in the Greater Jakarta area.</Paragraph>
            <Paragraph className="line-spacing">Twitter: @JakartaJS and we use the hashtag #jakartajs</Paragraph>
        </CardContaint>

        <CardContaint title="Members" seeAll={true}>
            <CardGroup>
                <Paragraph>Organizers</Paragraph>
                <Paragraph>Adhy Wiranata <span>4 others.</span></Paragraph>
            </CardGroup>
        </CardContaint>

        <CardContaint title="Past Meetups" classBody="card-containt-body-row" seeAll={true}>
            <ColsCard date="27 November 2017" tags="39 JakartaJS April Meetup with kumparan" views="139"/>
            <ColsCard date="27 October 2017" tags="38 JakartaJS April Meetup with Blibli" views="113"/>
            <ColsCard date="27 September 2017" tags="37 JakartaJS April Meetup with Hacktiv8" views="110"/>
        </CardContaint>
    </div>
)

export default CardBody;