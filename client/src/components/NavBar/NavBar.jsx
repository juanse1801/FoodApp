import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import './NavBar.css'


export const NavBar=()=>{

    return(
        <header className='navbar'>
            <div className='divbar'>
            <NavLink to='/home' className='linknavbar'>Home</NavLink>
            </div>
            <div className='divbar'>
            <NavLink to='/createRecipe' className='linknavbar'>Create Recipe</NavLink>
            </div>
        </header>
    )
}



export default NavBar;