import React, { useEffect } from 'react';
import {Link,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {getIdRecipes} from '../../actions/actions';
import NavBar from '../NavBar/NavBar';
import './RecipeDetails.css';
import reserva from '../../sources/imagenreserva.jpg'

export const RecipeDetail=({match,getIdRecipes,details})=>{

    useEffect(()=>{
        getIdRecipes(match.params.id);
    },[getIdRecipes,match])


    return(
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div className='details'>
            {details.map(recipe=>(
                <div className='detailcont'>
                <div className='imagedetail'>
                {recipe.image?<img src={`${recipe.image}`} className='imagecont'></img>:<img src={reserva}/>}
                </div>
                <div className='namedetail'>
                    {recipe.name}
                </div>
                <div className='resumedetail'>
                    <h3>Resume:</h3>
                    <p>{recipe.resume}</p>
                </div>
                <div className='dietsdetail'>
                <h3>Diets:</h3> 
                {recipe.diets.map(diet=>(
                <li>{diet}</li>))}
                </div>
                <div className='scoresdetail'>
                    <h3>Score:</h3>
                    {recipe.score}
                </div>
                <div className='scoresdetail'>
                    <h3>Healthy:</h3>
                    {recipe.healthy}
                </div>
                <div className='scoresdetail'>
                    {Array.isArray(recipe.howTo)?recipe.howTo.length?recipe.howTo[0].map(how=>(
                        <div>
                            <h4>Step {how.number}:</h4>
                            <p>{how.instruction}</p>
                        </div>
                    )):'No tiene instrucciones':<div><h4>Instructions:</h4>{recipe.howTo}</div>}
                </div>
                </div>
            ))}
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        details:state.details
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getIdRecipes:(id)=>dispatch(getIdRecipes(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RecipeDetail);
