import { ListGroup } from "react-bootstrap";
import TopRankingListItem from "./TopRankingListItem";

function TopRankingList() {
    return (
        <ListGroup as="ol">
            <ListGroup.Item as="li">
                <TopRankingListItem number={1} name={"Max Mustermann"} distance={"1.9km"}/>
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <TopRankingListItem number={2} name={"Max Mustermann2"} distance={"1.6km"}/>
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <TopRankingListItem number={3} name={"Max Mustermann3"} distance={"1.3km"}/>
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <TopRankingListItem number={4} name={"Max Mustermann4"} distance={"1.0km"}/>
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <TopRankingListItem number={5} name={"Max Mustermann5"} distance={"0.7km"}/>
            </ListGroup.Item>
        </ListGroup>
    )
}
export default TopRankingList;