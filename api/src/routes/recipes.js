const {Router}=require('express')
const {Recipe,Diet}=require('../db')
const getAllRecipes=require('../functions/getAllRecipes')
const router=Router();

router.get('/',async(req,res)=>{
    let allRecipes=await getAllRecipes();
    if(req.query.name){
        let filter=await allRecipes.filter((recipe)=>recipe.name.includes(req.query.name))
        if(filter.length===0) return res.status(500).json({error:'No se encontró la receta'})
        else return res.send(filter);
    }else{
        return res.send(allRecipes);
    }
});

router.get('/:id',async(req,res)=>{
    const {id}=req.params;
    let allRecipes=await getAllRecipes();
    if(id){
        let filter=await allRecipes.filter((recipe)=>recipe.id.toString()===id);
        return res.send(filter);
    }else{
        return res.send(allRecipes);
    } 
});
module.exports=router;
