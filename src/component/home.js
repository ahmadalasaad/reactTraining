import React, { Component } from 'react';

class Home extends Component {
    state = {}
    render() {
        return (
            <dev className='home'>
                <dev className='space'>
                    <p id='firstP'>SO, YOU WANT TO TRAVEL TO</p>
                    <p id='secondP'>SPACE</p>
                    <p id='thirdP'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </dev>
                <dev className='explore'>
                    <a href='/'>Explore</a>
                </dev>
            </dev>
        );
    }
}

export default Home;