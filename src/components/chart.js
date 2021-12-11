import React,{useState,useEffect} from 'react'
import {Line} from 'react-chartjs-2'
// import Plot  from 'react-plotly.js';

const Chart = () => {
    const [data1,setData] = useState({});
    var labelArr = [30];
    var dataArr = [30];
    // let cases_no =[];
    // let deaths_no=[];
    // let recovered_no=[];
    // const getCovidData = async()=>{
    //     try{
    //         const response = await fetch('https://disease.sh/v3/covid-19/historical/all');
    //         const apiData = await response.json();
    //         labelArr = Object.keys(apiData.cases);
    //         dataArr = Object.values(apiData.cases);
    //         console.log(labelArr);
    //         console.log(dataArr);

    //         setData({
    //             labels: labelArr,
    //             datasets: [
    //                 {
    //                     label: "Cases LAST 30 Days",
    //                     data: dataArr,
    //                     backgroundColor: "FFFCDC"
    //                 }
    //             ]
            // });
            // setData(apiData);
            // const cases = Object.values(data1.cases);
            // const deaths = Object.values(data1.deaths);
            // const recovered = Object.values(data1.recovered);
            // const dates = Object.keys(data1.cases);

            // console.log(dates);
            // console.log(cases);
            // console.log(deaths);
            // console.log(recovered);
            // for(var i=0;i<30;i++)
            // {
            //     cases_no.push(parseInt(cases[i]));
            //     deaths_no.push(parseInt(deaths[i]));
            //     recovered_no.push(parseInt(recovered[i]));

            // }
            // console.log(dates);
            // console.log(cases_no);
            // console.log(deaths_no);
            // console.log(recovered_no);
            // for(const Obj of apiData)
            // {
            //     dates.push(Obj.keys);
            //     cases.push(parseInt(Obj.values));
            // }
            // console.log(dates);
            // console.log(cases);

    //     } catch(err){
    //         console.log(err);
    //     }
    // }
    useEffect(()=>{
        const getCovidData = async()=>{
        try{
            const response = await fetch('https://disease.sh/v3/covid-19/historical/all');
            const apiData = await response.json();
            labelArr = Object.keys(apiData.cases);
            dataArr = Object.values(apiData.cases);
            console.log(labelArr);
            console.log(dataArr);

            setData({
                labels: labelArr,
                datasets: [
                    {
                        label: "Cases LAST 30 Days",
                        data: dataArr,
                        backgroundColor: "FFFCDC"
                    }
                ]
            });

        } catch(err){
            console.log(err);
        }
    }
    },[]);
    
    return (
        <div>
            {/* <Plot data={[{
                x: dates,
                y: cases,
                type: 'scatter',
                mode: 'lines',
                line: {color:'F0D290'}
            }]}/> */}
            <Line data={data1} />
        </div>
    )
}

export default Chart;
