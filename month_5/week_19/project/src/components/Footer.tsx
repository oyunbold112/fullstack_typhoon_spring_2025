import React from "react";

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <div className="top">
                <div className="logo">
                    <h1>MORENT</h1>
                    <p>Our vision is to provide convenience and help increase your sales business.</p>
                </div>
                <div className="about">
                    <h1>About</h1>
                    <p>How it works</p>
                    <p>Featured</p>
                    <p>Partnership</p>
                    <p>Bussiness Relation</p>
                </div>
                <div className="community">
                    <h1>Community</h1>
                    <p>Events</p>
                    <p>Blog</p>
                    <p>Podcast</p>
                    <p>Invite a Friend</p>
                </div>
                <div className="socials">
                    <h1>Socials</h1>
                    <p>Discord</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Facebook</p>
                </div>
            </div>
            <hr />
            <div className="bottom">
                <h2>
                ©2022 MORENT. All rights reserved
                </h2>
                <h2>Privacy & Policy</h2>
                <h2>Terms & Condition</h2>
            </div>
        </div>
    )
}

export default Footer;