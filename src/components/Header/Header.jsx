import { useState } from "react";
import "../Header/Header.scss";

function Header() {

    const [selectedTag, setSelectedTag] = useState(null);

    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <div className="header">
                <h1>Snaps</h1>
                <div>Filters: {selectedTag ? selectedTag : "no tag selected"}</div>
                <div>
                    <button
                        onClick={() => {
                            setDrawerOpen(!drawerOpen);
                        }}
                    >
                        {drawerOpen ? "Close" : "Open"} drawer
                    </button>
                </div>
                <h5>Our mission</h5>
                <h2>Provide photographers a space to share photos of the neighborhoods they cherish, <span className="header__text">expressed in their unique style.</span></h2>
            </div>

        </>);

}

export default Header;