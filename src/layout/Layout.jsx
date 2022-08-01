import { Outlet } from "react-router-dom";
import Header from "../components/navigation/Header";
import Footer from "../components/footer/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout