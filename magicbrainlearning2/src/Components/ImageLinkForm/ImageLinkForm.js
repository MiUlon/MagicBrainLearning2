import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return(
        <div>
            <p className='center f3 black imgaeLinkFormStyle'>This Magic Brain app will detect faces in your pictures. Give it a try!</p>
            <div className='pa4 br3 shadow-5 center imageLinkFormMaxWidth imageLinkFormBackground'>
                <input className='f4 pa2 w-70 center imageLinkFormBorder' type='text'></input>
                <button className='w-30 grow f4 link ph3 pv2 dib white imageLinkFormBackground imageLinkFormBorder'>Detect!</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;