const getApiRecipes=require('./getApiRecipes');
const getDataBaseRecipes=require('./getDataBaseRecipes');

const getAllRecipes=async()=>{
    let dataBaseRecipes=await getDataBaseRecipes();
    let apiRecipes=await getApiRecipes();
    let allRecipes=dataBaseRecipes.concat(apiRecipes);
    return allRecipes;
}

module.exports=getAllRecipes;