import React, { Component } from 'react';
import technologyData from '../technologyData.json'
class Technology extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: technologyData[0],
        }
    }

    handelTechnology = (e) => {
        this.setState({
            data: technologyData[e.target.value],
        })
    }

    render() {
        return (
            <dev className='technology'>
                <h1><span>03</span>SPACE LAUNCH 101</h1>
                <dev className='technologyTextHolder'>
                    <div className="technology__content">
                        <p>THE TERMINOLOGY...</p>
                        <h2 id="technology__title">{this.state.data.title}</h2>
                        <p id="technology__description">{this.state.data.description}</p>
                    </div>
                    <form action="" className="technology__nav">
                        <input type="radio" id="technology__douglas" name="technology" className="technology__team" value={0} onChange={this.handelTechnology} />
                        <input type="radio" id="technology__mark" name="technology" className="technology__team" value={1} onChange={this.handelTechnology} />
                        <input type="radio" id="technology__victor" name="technology" className="technology__team" value={2} onChange={this.handelTechnology} />
                    </form>
                </dev>
                <dev className='technologyImageHolder'>
                    <img src={this.state.data.picture} alt='' />
                </dev>
            </dev>
        );
    }
}

export default Technology;