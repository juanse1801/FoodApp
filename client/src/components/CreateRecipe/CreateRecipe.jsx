import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {postRecipe,getDiets} from '../../actions/actions';
import './CreateRecipe.css'
import NavBar from '../NavBar/NavBar';




export const CreateRecipe=({successfullPost,postRecipe,storeDiets,getDiets})=>{
    const [createRecipe,setCreateRecipe]=useState({
        name:'',
        resume:'',
        score:1,
        healthy:1,
        howTo:'',
        diets:[]
    })

    const [validates,setValidates]=useState({
        name:'',
        resume:'',
        score:'',
        healthy:'',
        successfullPostState:''
    })

    useEffect(()=>{
        getDiets();
    },[getDiets])

    const handleName=(event)=>{
        if(event.target.value.length){
            setCreateRecipe({...createRecipe,name:event.target.value})
            setValidates({...validates,name:''})
        }else{
            setCreateRecipe({...createRecipe,name:''})
        }
    }

    const handleResume=(event)=>{
        if(event.target.value.length){
            setCreateRecipe({...createRecipe,resume:event.target.value}) 
            setValidates({...validates,resume:''})
        }else{
            setCreateRecipe({...createRecipe,resume:''})
        }
    }

    const handleHowTo=(event)=>{
        setCreateRecipe({...createRecipe,howTo:event.target.value})
    }

    const handleScore=(event)=>{
        if(event.target.value>0||event.target.value<100){
            setCreateRecipe({...createRecipe,score:event.target.value})
            setValidates({...validates,score:''})
        }
    }

    const handleHealthy=(event)=>{
        if(event.target.value>0||event.target.value<100){
            setCreateRecipe({...createRecipe,healthy:event.target.value})
            setValidates({...validates,healthy:''})
        }
    }

    const handleDiets=(event)=>{
        if(event.target.checked){
            setCreateRecipe({...createRecipe,diets:[...createRecipe.diets,event.target.value]})
        }else{
            setCreateRecipe({...createRecipe,diets:createRecipe.diets.filter(diet=>diet!==event.target.value)})
        }
    }

    const postOk=()=>{
        postRecipe(createRecipe);
        setCreateRecipe({...createRecipe, name:'', resume:'', score:1, healthy:1, diet:[], howTo:''})
        setValidates({...validates,name:'', resume:'', score:'',successfullPostState:''})
        storeDiets.forEach(diet=>{
            if(document.getElementById(`${diet.id}`).checked==true) document.getElementById(`${diet.id}`).click();
        })
        console.log(successfullPost);
    }

    const handleSubmit=(event)=>{
        if(!createRecipe.name.length){
            event.preventDefault();
            return setValidates({...validates,name:'The name is required'})
        }else if(!createRecipe.resume.length){
            event.preventDefault();
            return setValidates({...validates,resume:'The resume is required'})
        }else if(createRecipe.score<0||createRecipe.score>100){
            event.preventDefault();
            return setValidates({...validates,score:'The score must be between 0-100'})
        }
        event.preventDefault();
        setValidates({...validates,successfullPostState:'Post agregado'});
        setTimeout(postOk,3000)
    }



    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div className='createrecipe'>
                <h2>Create Recipe</h2>
                <form onSubmit={(event)=>handleSubmit(event)}>
                    <div className='textflex'> 
                    <h3>Name:</h3>
                    <input type='text'autoComplete='off'onChange={(event)=>handleName(event)}value={createRecipe.name} className='textcreate'>
                    </input>
                    {validates.name}
                    <h3>Resume:</h3>
                    <input type='text'autoComplete='off'onChange={(event)=>handleResume(event)} value={createRecipe.resume} className='textcreate'>
                    </input>
                    {validates.resume}
                    <h3>Instructions:</h3>
                    <input type='text'autoComplete='off'onChange={(event)=>handleHowTo(event)} value={createRecipe.howTo} className='textcreate'>
                    </input>
                    </div> 
                    <div className='scorescreate'>
                        <h3>Scores:</h3>
                        <input type='number' onChange={(event)=>handleScore(event)}value={createRecipe.score}>
                        </input>
                        <input type='number' onChange={(event)=>handleHealthy(event)}value={createRecipe.healthy}>
                        </input>
                        {validates.score}
                    </div>
                    <div>
                        <h3>Diets:</h3>
                        {storeDiets.map((diet)=>(
                            <label>
                                {diet.name}
                                <input type='checkbox' onChange={(event)=>handleDiets(event)} value={diet.name} id={diet.id}>
                                </input>
                            </label>
                        ))}
                    </div>
                    <div className='submitcont'>
                        <button type='submit' className='submitrecipe'>Create Recipe</button>
                        {validates.successfullPostState}
                    </div>
                </form>
                </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        storeDiets:state.diets,
        successfullPost:state.successfullPost
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getDiets:()=>dispatch(getDiets()),
        postRecipe:(payload)=>dispatch(postRecipe(payload))
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(CreateRecipe);