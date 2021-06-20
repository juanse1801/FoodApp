import React from 'react';
import './Pagination.css'

export const Pagination=({recipesPerPage,allRecipes,paginate})=>{

    const pageNumbers=[];

    for(let i=1;i<=Math.ceil(allRecipes/recipesPerPage);i++){
        pageNumbers.push(i);
    }


    return(
        <div>
            <ul className='pages'>
                {pageNumbers.map(number=>(
                    <ul key={number}>
                        <button onClick={()=>paginate(number)} className='pageshover'>
                            {number}
                        </button>
                    </ul>
                ))}
            </ul>
        </div>
    )
}

export default Pagination;