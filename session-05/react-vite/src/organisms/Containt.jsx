import { StrictMode } from "react";
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import Paragraph from '../atoms/Paragraph';

const Containt = () => (
    <StrictMode>
        <div className="container">
            <CardHeader title="Hacktiv8 Meetup" btnName="Join Us">
                <Paragraph>Location Jakarta, Indonesia</Paragraph>
                <Paragraph>Members 1,078</Paragraph>
                <Paragraph>Organizers Adhy Wiranata</Paragraph>
            </CardHeader>
            
            <CardBody />
        </div>
    </StrictMode>
)

export default Containt;