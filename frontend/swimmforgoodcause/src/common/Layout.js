import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

function Layout() {

    return (
        <>
            <Header />
            <Container fluid className="px-3 pt-3 pb-9">
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}
export default Layout;