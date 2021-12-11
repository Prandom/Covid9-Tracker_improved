import React from 'react'

const Posts = ({data}) => {
    return (
        <tbody>
            {
                data.map((element,index)=>{
                    return(
                       <tr key={index} className="row">
                            <td className="cell">{element.state}</td>
                            <td className="cell cases">{element.confirmed}</td>
                            <td className="cell deaths">{element.deaths}</td>
                            <td className="cell recovered">{element.recovered}</td>
                        </tr> 
                    )
                })
            }
        </tbody>
    )
}

export default Posts
