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
                <h4>Our mission</h4>
                <h4>Provide photographers a space to share photos of the neighborhoods they cherish, expressed in their unique style.</h4>
            </div>

        </>);

}

export default Header;