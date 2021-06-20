const {Router}=require('express')
const {Recipe,Diet}=require('../db')
const getAllRecipes=require('../functions/getAllRecipes')
const router=Router();

router.get('/',async (req,res)=>{
     const diets= await Diet.findAll();
     res.send(diets)
})

module.exports=router;