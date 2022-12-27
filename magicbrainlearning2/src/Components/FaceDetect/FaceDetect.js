import React from 'react';

const FaceDetect = ({ imageURL }) => {
    return(
        <div>
            <img className='center pa4' width='500px' height='auto' alt='' src={imageURL}></img>
        </div>
    )
}

export default FaceDetect;