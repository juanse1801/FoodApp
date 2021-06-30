import React from 'react';
import {NavLink} from 'react-router-dom';
import './LandingPage.css'

export const LandingPage=()=>{
    return (
        <div className='landingpage'>
            <div className='landingcont'>
            <div>
                <h1>Henry Food</h1>
            </div>
            <div>
                <NavLink to='/home' className='botonlanding'>Enter</NavLink>
            </div>
            </div>
        </div>
    )
}

export default LandingPage;