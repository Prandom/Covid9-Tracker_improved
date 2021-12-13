import React,{useState,useEffect,useRef} from 'react'
// import {Line} from 'react-chartjs-2'
import Chart from "react-apexcharts";


const Graph1 = () => {
    const [labels,setLabels] = useState([]);
    const [cases,setCases] = useState([]);
    const [deaths,setDeaths] = useState([]);
    const [rec,setRec] = useState([]);
    const [options,setOptions] = useState({});
    const [series,setSeries] = useState([{}]);

    // const [data,setData] = useState([]);
    const getCovidData = async()=>{
        try{
            const response = await fetch('https://disease.sh/v3/covid-19/historical/all');
            const apiData = await response.json();
            console.log(apiData)
            setLabels(Object.keys(apiData.cases))
            setCases(Object.values(apiData.cases))
            setDeaths(Object.values(apiData.deaths))
            setRec(Object.values(apiData.recovered))

            setOptions({
                chart: {
                    id: 'Cases_Graph',
                    foreColor: '#FAEDF0'
                },
                xaxis: {
                    categories: labels,
                },
                fill: {
                    colors: ['#fab906']
                },
                stroke: {
                    width: 0
                }
            });
            setSeries([{
                name: "series1",
                data: cases,
            }]);
        }
        catch(err){
            console.log(err);
        }
        };
           
            
    useEffect(()=>{
        getCovidData();
    },[]);
    
    return (
        <div className='flex justify-end p-10'>
           <Chart options={options} series={series} type='area' width={320} height={300}/>
        </div>
    )
}

export default Graph1;
