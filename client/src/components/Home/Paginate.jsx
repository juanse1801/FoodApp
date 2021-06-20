import React,{useState,useEffect,useReducer} from 'react';
import { getAllRecipes, getQueryRecipes,filterbyDiet,getDiets, dietsFiltered, dietsDecrement } from '../../actions/actions';
import Recipes from './Recipes';
import Pagination from './Pagination';
import {connect} from 'react-redux';
import './Paginate.css';
import NavBar from '../NavBar/NavBar';


export const Paginate=({getAllRecipes,recipes,getQueryRecipes,filterbyDiet,diets,getDiets,filterRecipes,dietsFiltered,dietsFilter,dietsDecrement})=>{
    const [query,setQuery]=useState('');
    const [loading,setLoading]=useState(false);
    const [currentPage,setCurrentpage]=useState(1);
    const [recipesPerPage,setRecipesPerPage]=useState(8);
    const [sortA,setSortA]=useState('');
    const [sortB,setSortB]=useState('');
    const [sortC,setSortC]=useState('');
    const [sortD,setSortD]=useState('');
    const [filterState]=useState('');
    const [dietsState,setDietsState]=useState([]);//FALTA


    useEffect(()=>{

        const getRecipes=async()=>{
            setLoading(true);
            await getAllRecipes();
            setLoading(false)
        }
        getRecipes();
        getDiets();
    },[]);

    const handleChange=(event)=>{
        setQuery(event.target.value);
    };

    const handleSortA=(event)=>{
        if(event.target.checked){
            setCurrentpage(1)
            setSortA('sortA');
            recipes.sort(function (a,b){
                if(a.name>b.name){
                    return 1;
                }
                if(a.name<b.name){
                    return -1;
                }
                return 0
            })
        }else{
            setSortA('')
            if(query.length){
                getQueryRecipes(query);
            }else{
                getAllRecipes();
            }
        }
    }


    const handleSortB=(event)=>{
        if(event.target.checked){
            setCurrentpage(1)
            setSortB('sortB');
            recipes.sort(function (a,b){
                if(b.name>a.name){
                    return 1;
                }
                if(b.name<a.name){
                    return -1;
                }
                return 0
            })
        }else{
            setSortB('')
            if(query.length){
                getQueryRecipes(query);
            }else{
                getAllRecipes();
            }
        }
    }

    const handleSortC=(event)=>{
        if(event.target.checked){
            setCurrentpage(1)
            setSortC('sortC');
            recipes.sort(function (a,b){
                if(a.score>b.score){
                    return 1;
                }
                if(a.score<b.score){
                    return -1;
                }
                return 0
            })
        }else{
            setSortC('')
            if(query.length){
                getQueryRecipes(query);
            }else{
                getAllRecipes();
            }
        }
    }

    const handleSortD=(event)=>{
        if(event.target.checked){
            setCurrentpage(1)
            setSortD('sortD');
            recipes.sort(function (a,b){
                if(b.score>a.score){
                    return 1;
                }
                if(b.score<a.score){
                    return -1;
                }
                return 0
            })
        }else{
            setSortD('')
            if(query.length){
                getQueryRecipes(query);
            }else{
                getAllRecipes();
            }
        }
    }

    const handleFilter=(event)=>{
        if(event.target.checked){
            setCurrentpage(1);
            dietsFiltered(event.target.value);
            filterbyDiet();
        }else{
            if(query.length){
                dietsDecrement(event.target.value);
                filterbyDiet();
            }else{
                dietsDecrement(event.target.value);
                filterbyDiet();
            }
        }
    }
   
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(query.length){
            getQueryRecipes(query);
        }else{
            getAllRecipes();
        }
    };

    //get current recipes
    const indexOfLastRecipe=currentPage*recipesPerPage;
    const indexOfFirstRecipe=indexOfLastRecipe-recipesPerPage;
    const currentRecipes=dietsFilter.length?filterRecipes.slice(indexOfFirstRecipe,indexOfLastRecipe):recipes.slice(indexOfFirstRecipe,indexOfLastRecipe);
    const index=currentRecipes.length;
    const recipes1=currentRecipes.slice(0,index/2);
    const recipes2=currentRecipes.slice(index/2,index);
    //change page 
    const paginate=(pageNumber)=>setCurrentpage(pageNumber)

    return (
        <div className='recipe'>
            <div>
                <NavBar></NavBar>
            </div>
            <header className='header'>
                    <form onSubmit={(event)=>handleSubmit(event)} className='searchform'>
                        <input
                        type='text'
                        autoComplete='off'
                        onChange={(event)=>handleChange(event)} className='searchcont'>
                        </input>
                            <button type='submit' className='submitsearch'>Search</button>
                    </form>
                Sort by A-Z:
                <input type='checkbox' onChange={(event)=>handleSortA(event)} value={sortA}>
                </input>
                Sort by Z-A:
                <input type='checkbox' onChange={(event)=>handleSortB(event)} value={sortB}>
                </input>
                Sort by Max Score:
                <input type='checkbox' onChange={(event)=>handleSortC(event)} value={sortC}>
                </input>
                Sort by Min Score:
                <input type='checkbox' onChange={(event)=>handleSortD(event)} value={sortD}>
                </input>
            {diets.map((diet)=>(
                            <label>
                                {diet.name}
                                <input type='checkbox' onChange={(event)=>handleFilter(event)} value={diet.name}>
                                </input>
                            </label>
                        ))}
            </header>
            <div className='recipescontainer'>
            <Recipes recipes={recipes1} loading={loading}/>
            </div>
            <div className='recipescontainer'>
            <Recipes recipes={recipes2} loading={loading}/>
            </div>
            <div className='paginate'>
            <Pagination recipesPerPage={recipesPerPage} allRecipes={dietsFilter.length?filterRecipes.length:recipes.length} paginate={paginate}/>
            </div>
        </div>
    )
};

const  mapStateToProps=(state)=>{
    return {
        recipes:state.recipes,
        diets:state.diets,
        filterRecipes:state.filterRecipes,
        dietsFilter:state.dietsFilter
    };
};

const  mapDispatchToProps=(dispatch)=>{
    return {
        getAllRecipes:()=>dispatch(getAllRecipes()),
        getQueryRecipes:(query)=>dispatch(getQueryRecipes(query)),
        filterbyDiet:(payload)=>dispatch(filterbyDiet(payload)),
        getDiets:()=>dispatch(getDiets()),
        dietsFiltered:(payload)=>dispatch(dietsFiltered(payload)),
        dietsDecrement:(payload)=>dispatch(dietsDecrement(payload))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Paginate);