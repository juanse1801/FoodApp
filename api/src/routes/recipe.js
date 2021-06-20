const {Router}=require('express');
const {Recipe,Diet}=require('../db');
const router=Router();

router.post('/',async(req,res)=>{
    let {name,resume,score,healthy,howTo,diets}=req.body;

    if(!name||!resume) return res.status(400).json({error:'Este campo es obligatorio.'})
    else{
        const createRecipe=await Recipe.create({
            name,
            resume,
            score,
            healthy,
            howTo
        });
        if(!Array.isArray(diets)){
            diets=[diets]
        }
        const dataBaseDiets= await Diet.findAll({
            where:{
                name:diets,
            },
        });

        await createRecipe.setDiets(dataBaseDiets);
        res.send(createRecipe);

    }
    
    
})

module.exports=router;