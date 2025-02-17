import { useState } from "react";
import "../Footer/Footer.scss";

function Footer() {

    return (
        <>
            <div className="footer">
                <h1>Snaps</h1>
                <h4>For Photographers</h4>
                <h4>Hire a Talent</h4>
                <h4>Inspiration</h4>
                <h4>About</h4>
                <h4>Careers</h4>
                <h4>Support</h4>
                <a href="http://www.facebook.com">
                    <img src="" alt="Facebook" />
                </a>
                <a href="http://www.twitter.com">
                    <img src="/path/to/twitter-icon.png" alt="Twitter" />
                </a>
                <a href="http://www.instgram.com">
                    <img src="/" alt="Instagram" />
                </a>
                <a href="http://www.pintrest.com">
                    <img src="/path/to/pinterest-icon.png" alt="Pinterest" />
                </a>
            </div>

        </>);

}

export default Footer;