import axios from 'axios';
import {SET_RECIPES,GET_QUERYRECIPES,GET_IDRECIPES,GET_DIETS, POST_RECIPE,FILTER_BY_DIET,DIETS_FILTER, DIETS_DECREMENT, CLEAN_DETAILS} from '../actions/actionsNames';


const initialState={
    recipes:[],
    filterRecipes:[],
    dietsFilter:[],
    diets:[],
    details:[],   
}

function reducer(state=initialState,action){
    switch(action.type){
        case SET_RECIPES:{
            return {
                ...state,
                recipes:action.payload,
                
            };
        }
        case GET_QUERYRECIPES:{
            return {
                ...state,
                recipes:action.payload,
                
            }
        }
        case GET_IDRECIPES:{
            return {
                ...state,
                details:action.payload
            }
        }
        case GET_DIETS:{
            return {
                ...state,
                diets:action.payload
            }
        }
        case POST_RECIPE:{
            axios.post('http://localhost:3001/recipe',action.payload)
            return {
                ...state,
            }
        
        }

        case FILTER_BY_DIET:{
            return {
                ...state,
                filterRecipes:state.recipes.filter(recipe=>{
                    let validate=true;
                    for(let i=0;i<state.dietsFilter.length;i++){
                        if(!recipe.diets.includes(state.dietsFilter[i])){
                            validate=false;
                        }
                    }
                    return validate;
                })
            }
        }

        case DIETS_FILTER:{
            return {
                ...state,
                dietsFilter:[...state.dietsFilter,action.payload]
            }
        }

        case DIETS_DECREMENT:{
            return {
                ...state,
                dietsFilter:state.dietsFilter.filter(diets=>diets!==action.payload)
            }
        }

        case CLEAN_DETAILS:{
            return {
                ...state,
                details:[]
            }
        }



        default:{
            return state;
        }
    }
}

export default reducer;
