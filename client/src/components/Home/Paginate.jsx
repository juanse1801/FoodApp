import React,{useState,useEffect} from 'react';
import { getAllRecipes, getQueryRecipes,filterbyDiet,getDiets, dietsFiltered, dietsDecrement, sortByAbc, displayCheckBox } from '../../actions/actions';
import Recipes from './Recipes';
import Pagination from './Pagination';
import {connect} from 'react-redux';
import './Paginate.css';
import NavBar from '../NavBar/NavBar';


export const Paginate=({getAllRecipes,recipes,getQueryRecipes,filterbyDiet,diets,getDiets,filterRecipes,dietsFiltered,dietsFilter,dietsDecrement,details,sortByAbc,checkBox,displayCheck})=>{
    const [query,setQuery]=useState('');
    const [loading,setLoading]=useState(false);
    const [currentPage,setCurrentpage]=useState(1);
    const [recipesPerPage,setRecipesPerPage]=useState(8);
    const [sortABC,setSortABC]=useState('')


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

    const handleSelect=(event)=>{
        setSortABC(event.target.value);
        setCurrentpage(1);
        if(query.length){
            event.target.value==='1'?getQueryRecipes(query):sortByAbc(event.target.value)
        }else{
            event.target.value==='1'?getAllRecipes():sortByAbc(event.target.value)
        }
        
    }

    const clearSearch=()=>{
        setQuery('');
        getAllRecipes();
    }

    const handleDisplay=(event)=>{
        displayCheck(event.target.value)
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
                        onChange={(event)=>handleChange(event)} className='searchcont' value={query}>
                        </input>
                            <button type='submit' className='submitsearch'>Search</button>
                            <button type='button' className='submitsearch' onClick={()=>clearSearch()}>Clear Search</button>
                    </form>
                <select name="sorts" id="" onChange={(event)=>handleSelect(event)} className='submitsearch'>
                    <option value="1" className='options'>Default</option>
                    <option value="2" className='options'>Sort by A-Z</option>
                    <option value="3" className='options'>Sort by Z-A</option>
                    <option value="4" className='options'>Sort by max score</option>
                    <option value="5" className='options'>Sort by min score</option>
                </select>
                    <button onClick={(event)=>handleDisplay(event)} value="on" className='submitsearch'>Filter by diet</button>
                    {checkBox.length?diets.map((diet)=>{
                        if(dietsFilter.includes(diet.name)){
                            return (<label>
                                {diet.name}
                                <input type='checkbox' onChange={(event)=>handleFilter(event)} value={diet.name} checked='true'>
                                </input>
                            </label>)
                        }else{
                            return (<label>
                                {diet.name}
                                <input type='checkbox' onChange={(event)=>handleFilter(event)} value={diet.name}>
                                </input>
                            </label>)
                        }
                    }):<p></p>}
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
        dietsFilter:state.dietsFilter,
        checkBox:state.displayCheck
    };
};

const  mapDispatchToProps=(dispatch)=>{
    return {
        getAllRecipes:()=>dispatch(getAllRecipes()),
        getQueryRecipes:(query)=>dispatch(getQueryRecipes(query)),
        filterbyDiet:(payload)=>dispatch(filterbyDiet(payload)),
        getDiets:()=>dispatch(getDiets()),
        dietsFiltered:(payload)=>dispatch(dietsFiltered(payload)),
        dietsDecrement:(payload)=>dispatch(dietsDecrement(payload)),
        sortByAbc:(payload)=>dispatch(sortByAbc(payload)),
        displayCheck:(payload)=>dispatch(displayCheckBox(payload))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Paginate);