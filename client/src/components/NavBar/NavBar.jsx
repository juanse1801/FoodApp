import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css'


export const NavBar=()=>{

    return(
        <header className='navbar'>
            <div className='divbar'>
            <NavLink to='/home' className='linknavbar'>Home</NavLink>
            </div>
            <div className='title'>
                Food App
            </div>
            <div className='divbar'>
            <NavLink to='/createRecipe' className='linknavbar'>Create Recipe</NavLink>
            </div>
        </header>
    )
}



export default NavBar;