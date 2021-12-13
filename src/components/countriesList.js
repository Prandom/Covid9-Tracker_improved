import React,{useState,useEffect} from 'react'
import "../components/countriesList.css"
import { motion } from 'framer-motion';

const CountriesList = () => {
    const [data,setData] = useState([]);
    const [dataC,setDataC] = useState([]);
    const [country,setCountry] = useState([]);
    const getCovidData = async()=>{
        try{
            const response = await fetch('https://disease.sh/v3/covid-19/countries');
            const apiData = await response.json();
            setData(apiData);
        } catch(err){
            console.log(err);
        }
    }
    const getCovidDataCountry = async()=>{
        try{
            const response = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
            const apiDataC = await response.json();
            setDataC(apiDataC);
        } catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getCovidData();
    },[]);
    return (
       <>
            <motion.div className="wrap container container-wrap w-5/6 flex flex-col items-center justify-center mx-auto mb-10 rounded-lg"
            animate={{
                    x:5,
                    opacity:1
                }}
                initial={{
                    opacity:0,
                    x:-50
                }}
                transition={{
                    duration:1
                }}>
                
                { <select className="custom mont" onChange={
                    (e)=>{
                        var selectedCountry = e.target.value;
                        setCountry(selectedCountry);
                        getCovidDataCountry();
                    }
                }>
                    <option className="option" value="select-option" key='' selected disabled hidden>Select Country</option>
                    {
                        data.map((element,index)=>{
                        return(
                            <option className="option" value={element.country} key={index}>{element.country}</option>
                        )
                        })
                    }
                </select> }
            
                <div className="mt-2 flex flex-col shadow-md w-full items-center justify-center container mx-auto">  
                    <div className="flex flex-col w-full items-center justify-center sm:flex-row mt-6 mont object-scale-down">
                        <div className="data-cont bg-gradient-to-r from-yellow-600 to-yellow-300 ">
                            Total Cases<div className="country">{country}</div>
                            <div className="data text-yellow-800 shadow-sm">{dataC.cases}</div>
                        </div>
                        <div className="data-cont bg-gradient-to-r from-red-600 to-red-300 ">
                            Total Deceased<div className="country">{country}</div>
                            <div className="data text-red-900 shadow-sm">{dataC.deaths}</div>
                        </div>
                        <div className="data-cont bg-gradient-to-r from-green-600 to-green-300 ">
                            Total Recovered<div className="country">{country}</div>
                            <div className="data text-green-900 shadow-sm">{dataC.recovered}</div>
                        </div>
                    </div>
                </div>   
            </motion.div>
       </>  
    )
}

export default CountriesList;
