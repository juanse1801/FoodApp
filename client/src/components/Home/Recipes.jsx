import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import './Recipes.css';
import reserva from '../../sources/imagenreserva.jpg'

export const Recipes=({recipes,loading})=>{

    if(loading){
        return (<h2>Loading..,</h2>)
    }



    return(
        <div className='recipes'>
            {recipes.map((recipe)=>(
                <div className='pruebarep'>
                    <div>
                        {recipe.image!==null?<img src={`${recipe.image}`} className='image'/>:<img src={reserva}/>}
                    </div>
                <div key={recipe.id}>
                    {recipe.name.length<35?<NavLink to={`/recipeDetails/${recipe.id}`} className='link'><div className='pname'>{recipe.name}</div></NavLink>:
                    <NavLink to={`/recipeDetails/${recipe.id}`} className='link'><div className='pname'>{recipe.name.slice(0,recipe.name.length/2)}</div>
                    <div className='pname'>{recipe.name.slice(recipe.name.length/2,recipe.name.length)}</div></NavLink>}
                </div>
                <div className='diets'>
                    <p5>Diets:</p5>
                    <div>
                        {recipe.diets.map(diet=>(
                            <li className='listrecipes'>
                                {diet}
                            </li>
                        ))}
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
}

export default Recipes;