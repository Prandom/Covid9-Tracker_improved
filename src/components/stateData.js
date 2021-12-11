import React,{useState,useEffect} from 'react'
import "../components/stateData.css"
import { motion } from 'framer-motion';
import Posts from './Posts';
import Pagination from './Pagination';
// const requestOptions ={
//     method: 'GET',
//     dataType: 'jsonp',
//     mode: 'no-cors',
//     credentials: 'omit',
// }
const StateData = () => {
    const [data,setData] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const getCovidData = async()=>{
        try{
            const response = await fetch('https://api.covid19india.org/data.json');
            const apiData = await response.json();
            setData(apiData.statewise)
        } catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getCovidData();
    },[]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost,indexOfLastPost);
    
    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber);
    }
    return (
        <>
            <motion.div className="container container-wrap mx-auto flex flex-col items-center justify-center mont mt-16 shadow-xl mb-10  bg-yellow-100 rounded-xl pb-6 w-5/6 px-6"
            animate={{
                    x:5,
                    opacity:1
                }}
                initial={{
                    opacity:0,
                    x:-50
                }}
                transition={{
                    duration:0.9
                }}>
                <div className="comp right uppercase mb-10">
                    <h3>Indian States Data</h3>
                </div>
                <table className="table-auto bg-red-100 table1">
                    <thead className="head1">
                        <tr className="row row1">
                            <th className="cell">State</th>
                            <th className="cell ">Cases</th>
                            <th className="cell ">Deceased</th>
                            <th className="cell ">Recovered</th>
                        </tr>
                    </thead>
                    {/* <tbody>
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
                    </tbody> */}
                    <Posts data={currentPosts}/>
                </table>
                <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/>
                {/* <div class="table w-4/5 ">
                    <div class="table-row-group">
                        <div class="table-row row1 row">
                            <div class="table-cell cell">State</div>
                            <div class="table-cell cell">Cases</div>
                            <div class="table-cell cell">Deceased</div>
                            <div class="table-cell cell">Recovered</div>
                        </div>
                        {
                            data.map((element,index)=>{
                                return(
                                   <div key={index} className="table-row row">
                                        <div className="table-cell cell">{element.state}</div>
                                        <div className="table-cell cell confirmed">{element.confirmed}</div>
                                        <div className="table-cell cell death">{element.deaths}</div>
                                        <div className="table-cell cell recovered">{element.recovered}</div>
                                    </div> 
                                )
                            })
                        }
                    </div>
                </div> */}
            </motion.div>
        </>
    )
}

export default StateData;
