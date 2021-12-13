import React,{useState,useEffect} from 'react'
import "../components/worldwidetotal.css"
import { motion } from "framer-motion"
import Graph1 from '../components/graph1';
import Graph2 from '../components/graph2';
import Graph3 from '../components/graph3';
const Worldwidetotal = () => {
    const [data,setData] = useState([]);
    // const [cases,setCases] = useState(0);
    const getCovidData = async()=>{
        try{
            const response = await fetch('https://disease.sh/v3/covid-19/all');
            const apiData = await response.json();
            setData(apiData);
        } catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getCovidData();
    },[]);
    return (
       <>
            <motion.div className="container-wrap flex flex-col shadow-md items-center justify-center mx-auto w-11/12 border-0 relative top-3 rounded-lg"
                animate={{
                    y:10,
                    opacity:1
                }}
                initial={{
                    opacity:0,
                    y:-50
                }}
                transition={{
                    duration:0.7
                }}>  
                
                <div className="flex flex-col mb-3 mont py-4 px-8 justify-evenly w-full">
                    <div className="dg-cont">
                        <div className="data-cont bg-gradient-to-r from-yellow-600 to-yellow-300 ">
                            Total Cases<div className="world">World</div>
                            <div className="data text-yellow-800 ">{data.cases}</div>
                            
                        </div>
                        <Graph1/>
                    </div>
                    <div className="dg-cont">
                        <div className="data-cont bg-gradient-to-r from-red-600 to-red-300 ">
                            Total Deceased<div className="world">World</div>
                            <div className="data text-red-900 shadow-sm">{data.deaths}</div>

                        </div>
                    <Graph2/>
                    </div>
                    <div className="dg-cont">
                        <div className="data-cont bg-gradient-to-r from-green-700 to-green-300 ">
                            Total Recovered<div className="world">World</div>
                            <div className="data text-green-900 shadow-sm">{data.recovered}</div>

                        </div>
                    <Graph3/>
                    </div>
                </div>
            </motion.div>      
       </>  
    )
}

export default Worldwidetotal;
