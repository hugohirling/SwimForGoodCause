import { Card } from "react-bootstrap";
import TopRankingList from "./TopRankingList";

function TopRankingCard() {
    return (
        <Card className="border-0">
            <Card.Body>
                <Card.Title className="text-center">Top X Ranking</Card.Title>
                <Card.Body>
                    <TopRankingList />
                </Card.Body>
            </Card.Body>
        </Card>
    )
}
export default TopRankingCard;