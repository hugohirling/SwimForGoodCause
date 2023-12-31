import { Row, Col } from "react-bootstrap";
import InfoCard from "./InfoCard";
import TopRankingCard from "./TopRankingCard";

function Dashboard() {
    return (
        <Row>
            <Col xl="5">
                <InfoCard />
            </Col>
            <Col>
                <TopRankingCard />
            </Col>
        </Row>
    )
}
export default Dashboard;