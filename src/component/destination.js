import React, { Component } from 'react';
import destinaionValues from '../destinationValues.json'
class Destination extends Component {
constructor(props) {
    super(props);
    this.state = {
        data:destinaionValues[0],
    }
}

handelDestinations = (e) => {
    this.setState({
        data:destinaionValues[e.target.value], 
    })
}

render() {
        return (
            <dev className='destination'>
                <dev className='imageHolder'>
                    <h1><span>01</span>Pick your destination</h1>
                    <img src='' alt=''/>
                </dev>
                <dev className='textHolder'>
                    <form action="" className="destination__nav">
                        <input type="radio" id="destination__moon" name="destination" className="destination__locations"  value={0} onChange={this.handelDestinations}/>
                        <label htmlFor="destination__moon" className="nav__text destination__moon">Moon</label>
                        <input type="radio" id="destination__mars" name="destination" className="destination__locations" value={1} onChange={this.handelDestinations}/>
                        <label htmlFor="destination__mars" className="nav__text destination__mars" >mars</label>
                        <input type="radio" id="destination__europa" name="destination" className="destination__locations" value={2} onChange={this.handelDestinations}/>
                        <label htmlFor="destination__europa" className="nav__text destination__europa">europa</label>
                        <input type="radio" id="destination__titan" name="destination" className="destination__locations" value={3} onChange={this.handelDestinations}/>
                        <label htmlFor="destination__titan" className="nav__text destination__titan">Titan</label>
                    </form>
                    <h1 id="destination__title" className="heading--2">{this.state.data.name}</h1>
                    <p className="para" id="destination__description">{this.state.data.description}</p>
                    <div className="destination__stats">
                        <div className="destination__distance">
                            <h5 className="subheading--2">avg. distance</h5>
                            <h6 className="subheading--1" id="destination__distance">{this.state.data.distance}</h6>
                        </div>
                        <div className="destination__time">
                            <h5 className="subheading--2">EST. Travel time</h5>
                            <h6 className="subheading--1" id="destination__travel">{this.state.data.travelTime}</h6>
                        </div>
                    </div>
                </dev>
            </dev>
        );
    }
}

export default Destination;