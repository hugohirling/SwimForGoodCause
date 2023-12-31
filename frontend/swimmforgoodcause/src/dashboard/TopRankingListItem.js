import {TrophyFill} from "react-bootstrap-icons";
import { Row, Col } from "react-bootstrap";

function TopRankingListItem({number, name, distance}) {
    return (
        <div className="mx-4 my-2">
            <Row>
                <Col md="3">
                    <strong className="pe-3">{number}. Platz</strong>
                    {
                        number === 1
                        ?
                        <TrophyFill color="var(--bs-gold)" size={25}/>
                        :
                        (
                            number === 2
                            ?
                            <TrophyFill color="var(--bs-silver)" size={25}/>
                            :
                            (
                                number === 3
                                ?
                                <TrophyFill color="var(--bs-bronze)" size={25}/>
                                :
                                <></>
                            )
                        )
                    }
                </Col>
                <Col md="6" className="text-center">
                    {name}
                </Col>
                <Col md="3" className="text-end">
                    {distance}
                </Col>
            </Row>
        </div>
    )
}
export default TopRankingListItem;