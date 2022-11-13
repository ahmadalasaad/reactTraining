import React, { Component } from 'react';
import crewData from '../crewData.json'
class Crew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: crewData[0],
        }
    }

    handelCrew = (e) => {
        this.setState({
            data: crewData[e.target.value],
        })
    }

    render() {
        return (
            <dev class='crew'>
                <h1><span>02</span>Meet your crew</h1>
                <dev className='crewTextHolder'>
                    <div className="crew__content">
                        <h2 id="crew__role">{this.state.data.title}</h2>
                        <h3 id="crew__name">{this.state.data.name}</h3>
                        <p id="crew__description">{this.state.data.description}</p>
                    </div>
                    <form action="" class="crew__nav">
                        <input type="radio" id="crew__douglas" name="crew" className="crew__team" value={0} onChange={this.handelCrew} />
                        <input type="radio" id="crew__mark" name="crew" className="crew__team" value={1} onChange={this.handelCrew} />
                        <input type="radio" id="crew__victor" name="crew" className="crew__team" value={2} onChange={this.handelCrew} />
                        <input type="radio" id="crew__anousheh" name="crew" className="crew__team" value={3} onChange={this.handelCrew} />
                    </form>
                </dev>
                <dev class='crewImageHolder'>
                    <img src={this.state.data.picture} alt='' />
                </dev>
            </dev>
        );
    }
}

export default Crew;