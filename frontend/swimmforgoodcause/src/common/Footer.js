import { Container, Navbar, Nav, Button } from "react-bootstrap";

function Footer() {

    return (
        <Navbar fixed="bottom" expand="sm" bg="primary" className="bottom-0" id="footer">
            <Container fluid>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="https://berkheim.dlrg.de/impressum-und-datenschutz/" target="_blank">
                            <Button variant="dlrg-yellow">Impressum</Button>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://berkheim.dlrg.de" target="_blank">
                            <Button variant="dlrg-yellow">DLRG Ortsgruppe Berkheim</Button>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="https://hugohirling.com" target="_blank">
                            &copy; 2024 - Hugo Hirling
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Footer;