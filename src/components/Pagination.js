import React from 'react'
import './pagination.css'
const Pagination = ({postsPerPage, totalPosts,paginate}) => {
    const pageNumbers = [];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <div className='pagination flex flex-row mt-3 justify-around '>
            {
                pageNumbers.map(number=>
                    (
                       <div onClick={()=>paginate(number)} className="pg-item px-2 m-2 border-2 border-black shadow-xl rounded-md">
                           <a href="#!" className='pg-link'>
                               {number}
                            </a> 
                        </div>
                    ))
            }
            
        </div>
    )
}

export default Pagination
