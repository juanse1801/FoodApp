const axios=require('axios');
const {API_KEY}=process.env;

const recortar=(sumary)=>{
    let patronA=new RegExp('</b>','g')
    let patronB=new RegExp('<b>','g')
    let patronC=new RegExp('<a','g')
    let valor=""
    let recorteA=sumary.replace(patronA,valor);
    let recorteB=recorteA.replace(patronB,valor);
    let split=recorteB.split(patronC);
    return split[0];
}

const getalldiets=(el)=>{
    const primerarray=el.diets.map(diet=>{return diet});
    if(el.vegetarian && !primerarray.includes('vegetarian')){
        primerarray.push('vegetarian');
    };
    if(el.vegan && !primerarray.includes('vegan')){
        primerarray.push('vegan')
    };
    if(el.glutenFree && !primerarray.includes('gluten free')){
        primerarray.push('gluten free')
    };

    return primerarray
}

const getApiRecipes=async()=>{
    let apiRecipes= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
    let arrayRecipes=await apiRecipes.data.results.map((el)=>{
        return {
            id:el.id,
            name:el.title,
            resume:recortar(el.summary),
            score:el.spoonacularScore,
            healthy:el.healthScore,
            diets:getalldiets(el),
            howTo:el.analyzedInstructions.map(datas=>datas.steps.map(how=>{return {number:how.number,instruction:how.step}})),
            image:el.image
        }
    })

        

    return arrayRecipes;
}

module.exports=getApiRecipes;


