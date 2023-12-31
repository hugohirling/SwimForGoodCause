import { Card } from "react-bootstrap";
import image from "../img/water.JPG";

function InfoCard() {
    return (
        <Card className="border-white">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className="text-center">Schwimmen für den guten Zweck</Card.Title>
                <Card.Text>
                    Hier könnte ein sehr wertvoller Text stehen was das hier überhaupt alles ist, wohin die Spenden gehen und so weiter halt
                </Card.Text>
                <Card.Link href="https://www.esslinger-herzen.de/" target="_blank">Esslingens Flammende Herzen e.V.</Card.Link>
            </Card.Body>
        </Card>
    )
}
export default InfoCard;