import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <div className='navigationFlexEnd pa4'>
                <p onClick={() => onRouteChange('signout')} className='signOutStyle f3 dim black link pa3 pointer shadow-5 grow navigationBackground'>Sign Out!</p>
            </div>
        )
    } else {
        return (
            <div className='navigationFlexEnd pa4'>
                <p onClick={() => onRouteChange('signin')} className='signOutStyle f3 dim black link pa3 pointer shadow-5 grow navigationBackground'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='signOutStyle f3 dim black link pa3 pointer shadow-5 grow navigationBackground'>Register</p>
            </div>
        )
    }
}

export default Navigation;