export const handleSelect=(state,payload)=>{
    let selectEvent=payload.toString();
    switch(selectEvent){
        case "2":
            return {
                ...state,
                recipes:state.recipes.sort(function (a,b){
                    if(a.name>b.name){
                        return 1;
                    }
                    if(a.name<b.name){
                        return -1;
                    }
                    return 0
                })
            }
        case "3":
            return {
                ...state,
                recipes:state.recipes.sort(function (a,b){
                    if(b.name>a.name){
                        return 1;
                    }
                    if(b.name<a.name){
                        return -1;
                    }
                    return 0
                })
            }
        case "4":
            return {
                ...state,
                recipes:state.recipes.sort(function (a,b){
                    if(a.score>b.score){
                        return 1;
                    }
                    if(a.score<b.score){
                        return -1;
                    }
                    return 0
                })
            }
        case "5":
            return {
                ...state,
                recipes:state.recipes.sort(function (a,b){
                    if(b.score>a.score){
                        return 1;
                    }
                    if(b.score<a.score){
                        return -1;
                    }
                    return 0
                })
            }
        default:
            return false
            
    }
}
