import React from 'react';
import './FaceDetect.css';

const FaceDetect = ({ imageURL, setFaceBox }) => {
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' width='500px' height='auto' alt='' src={imageURL}></img>
                <div className='bounding-box' style={{top: setFaceBox.topRow, right: setFaceBox.rightCol, bottom: setFaceBox.bottomRow, left: setFaceBox.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceDetect;