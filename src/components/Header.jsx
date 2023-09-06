import React from "react";
import trollfaceImg from "../assets/Images/troll-face.png";

function Header() {
    return (
        <header>
            <img src={trollfaceImg} alt="Problem?" />
            <h1>Meme Generator</h1>
        </header>
    )
}

export default Header;