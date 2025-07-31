import React from "react";

const HeroFour: React.FC = () => {
    return (
        <>
        <div className="hero-four-container">
            <div className="person pone">
                <img src="assets/ceo-1.svg" alt="" />
                <h1>Surename One</h1>
                <p className="lorem">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="building">
                    CEO Building One
                </p>
            </div>
            <div className="person ptwo">
                <img src="assets/ceo-2.svg" alt="" />
                <h1>Surename Two</h1>
                <p className="lorem">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="building">
                    CEO Building Two
                </p>
            </div>
            <div className="person pthree">
                <img src="assets/ceo-3.svg" alt="" />
                <h1>Surename Three</h1>
                <p className="lorem">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="building">
                    CEO Building Three
                </p>
            </div>
        </div>
        </>
    )
}

export default HeroFour;