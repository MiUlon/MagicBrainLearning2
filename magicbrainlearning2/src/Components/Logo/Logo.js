import React from 'react';
import Tilt from 'react-parallax-tilt';
import MagicBrainLogo from './magicBrain.png';
import './Logo.css';

const Logo = () => {
    return(
        <div className='grow' style={{ height: '150px', width: '150px' }}>
            <Tilt className='ma4 mt0 pa2 br2 shadow-2 logoBackground' style={{ height: '150px', width: '150px' }}>
                <div>
                    <img alt='Magic brain' src={ MagicBrainLogo } height='130px' width='130px'></img>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;