import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Root() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow bg-mainBlue">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}