//GET RECIPES
//GET RECIPE DETAIL
//GET DIET
import axios from 'axios';
import {SET_RECIPES,GET_QUERYRECIPES,GET_IDRECIPES,GET_DIETS,POST_RECIPE,FILTER_BY_DIET,DIETS_FILTER, DIETS_DECREMENT} from './actionsNames'

export function getAllRecipes(){
    return (dispatch)=>{
        axios.get('http://localhost:3001/recipes').then(res=>{
            dispatch({type:SET_RECIPES,payload:res.data})
        })
    }
}

export function getQueryRecipes(query){
    return (dispatch)=>{
        axios.get(`http://localhost:3001/recipes?name=${query}`).then(res=>{
            dispatch({type:GET_QUERYRECIPES,payload:res.data})
        })
    }
}

export function getIdRecipes(id){
    return (dispatch)=>{
        axios.get(`http://localhost:3001/recipes/${id}`).then(res=>{
            dispatch({type:GET_IDRECIPES,payload:res.data})
        })
    }
}

export function getDiets(){
    return (dispatch)=>{
        axios.get('http://localhost:3001/types').then(res=>{
            dispatch({type:GET_DIETS,payload:res.data})
        })
    }
}

export function postRecipe(payload){
    return {type:POST_RECIPE,payload:payload}
}

export function filterbyDiet(){
    return {type:FILTER_BY_DIET}
}

export function dietsFiltered(payload){
    return {type:DIETS_FILTER,payload:payload}
}

export function dietsDecrement(payload){
    return {type:DIETS_DECREMENT,payload:payload}
}