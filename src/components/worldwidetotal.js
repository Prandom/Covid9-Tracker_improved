import React,{useState,useEffect} from 'react'
import "../components/worldwidetotal.css"
import { motion } from "framer-motion"
// import Chart from './chart'
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
        // const interval = setInterval(()=>{
        //     if(cases<parseInt(data.cases))
        //     setCases(cases=>cases+10);
        // },1);
        // return () => clearInterval(interval);
    },[]);
    return (
       <>
            <motion.div className="container-wrap flex flex-col shadow-md items-center justify-center mx-auto w-5/6 container border-0 relative top-3 rounded-lg"
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
                <div className="heading right flex justify-center">
                    <h1>COVID-19 Tracker</h1>
                </div>
                <div className="comp1 right uppercase">
                    <h3>World Wide Stats</h3>
                </div>
                <div className="flex flex-col sm:flex-row mt-6 mont py-4 px-8 justify-between object-contain">
                    <div className="data-cont bg-yellow-200 border-yellow-400">
                        Total Cases<div className="world">World</div>
                        <div className="data text-yellow-500 shadow-sm">{data.cases}</div>
                    </div>
                    <div className="data-cont bg-red-200">
                        Total Deceased<div className="world">World</div>
                        <div className="data text-red-500 shadow-sm">{data.deaths}</div>
                    </div>
                    <div className="data-cont bg-green-100">
                        Total Recovered<div className="world">World</div>
                        <div className="data text-green-500 shadow-sm">{data.recovered}</div>
                    </div>
                </div>
                {/* <Chart/> */}
            </motion.div>      
       </>  
    )
}

export default Worldwidetotal;
