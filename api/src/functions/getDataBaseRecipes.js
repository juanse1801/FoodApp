const {Recipe,Diet}=require('../db.js')

const getDataBaseRecipes=async()=>{
      let recipe=await Recipe.findAll({
        include:{
            model:Diet,
            attributes:['name'],
            through:{
                attributes:[],
            },
        },
    });
    let recipeOk=recipe.map((el)=>{
        return {
            id:el.id,
            name:el.name,
            resume:el.resume,
            score:el.score,
            healthy:el.healthy,
            diets:el.diets.map(data=>data.name),
            howTo:el.howTo,
            image:el.image
        }
    })
    return recipeOk ;
};

module.exports=getDataBaseRecipes;