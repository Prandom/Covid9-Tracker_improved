import React,{useState,useEffect} from 'react'
// import {Line} from 'react-chartjs-2'
import Chart from "react-apexcharts";


const Graph2 = () => {
    const [labels,setLabels] = useState([]);
    const [deaths,setDeaths] = useState([]);
    const [options,setOptions] = useState({});
    const [series,setSeries] = useState([{}]);

    const getCovidData = async()=>{
        try{
            const response = await fetch('https://disease.sh/v3/covid-19/historical/all');
            const apiData = await response.json();
            console.log(apiData)
            setLabels(Object.keys(apiData.cases))
            setDeaths(Object.values(apiData.deaths))

            setOptions({
                chart: {
                    id: 'Cases_Graph',
                    foreColor: '#FAEDF0'
                },
                xaxis: {
                    categories: labels,
                },
                fill: {
                    colors: ['#e45339']
                },
                stroke: {
                    width: 0
                }
            });
            setSeries([{
                name: "series1",
                data: deaths,
            }]);// eslint-disable-line react-hooks/exhaustive-deps
        }
        catch(err){
            console.log(err);
        }
        };
           
            
    useEffect(()=>{
        getCovidData(); // eslint-disable-line react-hooks/exhaustive-deps
    },[]);
    
    return (
        <div className='flex justify-end p-10'>
           <Chart options={options} series={series} type='area' width={320} height={300}/>
        </div>
    )
}

export default Graph2;
