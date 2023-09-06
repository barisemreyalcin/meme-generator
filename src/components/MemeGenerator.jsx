import React from "react";

class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "",
            allMemeImages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(memeDatas => {
                const {memes} = memeDatas.data;
                this.setState({allMemeImages: memes})
                // console.log(memes);
            })
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const randomNumber = Math.floor(Math.random() * this.state.allMemeImages.length);
        const randomImageUrl = this.state.allMemeImages[randomNumber].url;
        this.setState(
            {randomImage: randomImageUrl}
        )
    }

    render() {
        return (
            <div id="meme-generator">
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="topText" onChange={this.handleChange} value={this.state.topText} placeholder="Top Text"/>
                    <input type="text" name="bottomText" onChange={this.handleChange} value={this.state.bottomText} placeholder="Bottom Text"/>
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" className="meme"/>
                    <h2 className="top-text">{this.state.topText}</h2>
                    <h2 className="bottom-text">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;