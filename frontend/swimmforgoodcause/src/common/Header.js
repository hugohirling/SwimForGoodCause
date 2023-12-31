import {Container, Navbar, Nav, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function Header() {

    return (
        <Navbar expand="md" bg="primary" sticky="top" id="header">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="py-0 mr-3"><img src="/logo.svg" height="60" role="svg"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="w-100 d-flex flex-wrap justify-content-xl-between align-items-center m-0">
                        <Nav className="me-auto">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/" className="text-white" eventKey="1">Dashboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="#2" className="text-white" eventKey="2">Tab2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="order-xl-5 ml-auto mr-2 mx-xl-0" expand="xl">
                            <Nav.Item className="order-5 d-flex align-items-center ml-2">
                                <Nav.Link as={Link} to="#login">
                                    <Button variant="dlrg-yellow">Login</Button>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header;