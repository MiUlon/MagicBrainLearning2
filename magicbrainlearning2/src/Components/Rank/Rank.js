import React from 'react';
import './Rank.css';

const Rank = () => {
    return(
        <div>
            <p className='f3 white center rankTextStyle'>Mindaugas, you currently searched:</p>
            <p className='f1 white center rankTextStyle removeEmptySpaceAbove'>#5 times!</p>
        </div>
    )
}

export default Rank;