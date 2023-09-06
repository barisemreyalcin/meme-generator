import React from "react";

class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            image: "http://i.imgflip.com/1bij.jpg"
        }
    }

    render() {
        return (
            <h2>Meme Generator</h2>
        )
    }
}

export default MemeGenerator;