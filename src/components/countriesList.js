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
            <motion.div className="wrap container container-wrap w-5/6 flex flex-col items-center justify-center mx-auto bg-yellow-100 mb-10 border rounded-lg"
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
                <div className="comp3 right uppercase flex justify-center">
                    <h3>Country Wise Stats</h3>
                </div>
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
            
                <div className="container-wrap1 mt-2 flex flex-col shadow-md w-full items-center justify-center container mx-auto">  
                    <div className="flex flex-col sm:flex-row mt-6 mont object-scale-down">
                        <div className="data-cont bg-yellow-200 ">
                            Total Cases<div className="country">{country}</div>
                            <div className="data text-yellow-500 shadow-sm">{dataC.cases}</div>
                        </div>
                        <div className="data-cont bg-red-200">
                            Total Deceased<div className="country">{country}</div>
                            <div className="data text-red-500 shadow-sm">{dataC.deaths}</div>
                        </div>
                        <div className="data-cont bg-green-100">
                            Total Recovered<div className="country">{country}</div>
                            <div className="data text-green-500 shadow-sm">{dataC.recovered}</div>
                        </div>
                    </div>
                </div>   
            </motion.div>
       </>  
    )
}

export default CountriesList;
