import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PopUp from "../components/PopUp";

export default function Root() {

    const [showPopup, setShowPopup] = useState(true);
    const [contactLinksOption, setContactLinksOption] = useState(1);
    const handleImageClick = (imageNumber) => {
        setShowPopup(false);
        setContactLinksOption(imageNumber);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar
                contactLinksOption={contactLinksOption}
            />
            <div className="flex-grow bg-whiteNew">
                <Outlet />
            </div>
            <div className="bg-custom-gradient-two">
                {showPopup &&
                    <PopUp onImageClick={handleImageClick} />
                }
                <Footer
                    contactLinksOption={contactLinksOption}
                />
            </div>
        </div>
    );
}