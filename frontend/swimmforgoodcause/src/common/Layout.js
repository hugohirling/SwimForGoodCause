import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

function Layout() {

    var minHeight = 0

    useEffect(() => {
        minHeight = (window.outerHeight - document.getElementById("header").clientHeight - document.getElementById("footer").clientHeight ) + "px";
        console.log(window.outerHeight)
        console.log(minHeight)
    }, [])

    return (
        <div className="position-relative" style={{minHeight: "100vh"}}>
            <Header />
            <Container fluid className="px-3 pt-3 pb-10 pb-md-7">
                <Outlet />
            </Container>
            <Footer />
        </div>
    )
}
export default Layout;