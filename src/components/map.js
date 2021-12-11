import React,{useState,useEffect} from 'react'
import { MapContainer, GeoJSON, Popup} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import {features} from "../components/countries.json"
import "../components/map.css"


const CovidMap = () => {
    const [countries,setCountries] = useState([]);
    // const [i,setI] = useState(0);
    var i = 0;
    // const [data,setData] = useState([]);
    // const [countryName,setCountryName] = useState([]);
    // const [cases,setCases] = useState([]);
    // const [deaths,setdeaths] = useState([]);
    // const [recovered,setRecovered] = useState([]);
    // const covidData =[];
    const load =()=>{
        setCountries(features);
    }
    // const getCovidData = async()=>{
    //     try{
    //         const response = await fetch(`https://disease.sh/v3/covid-19/countries`);
    //         const apiData = await response.json();
    //         setData(apiData);
    //         // Object.values(apiData).forEach(val =>{
    //         //     // console.log(val.countryInfo.iso3);
    //         //     covidData[i] = {
    //         //         iso3: val.countryInfo.iso3,
    //         //         cases: val.cases,
    //         //         deaths: val.deaths,
    //         //         recovered: val.recovered,
    //         //     }
    //         //     i++;
    //         // });
    //         // covidData.forEach((obj)=>console.log(obj));
    //         // setCases(data.cases);
    //         // setdeaths(data.deaths);
    //         // setRecovered(data.recovered);
    //         // console.log(cases);
    //         // console.log(deaths);
    //         // console.log(recovered);

    //     } catch(err){
    //         console.log(err);
    //     }
    // }
    const mapStyle ={
        fillColor: 'white',
        weight:1,
        color: 'black',
        fillOpacity:1,
    };
    // const findCountry=(pr)=>{
    //     const ind = covidData.find(obj => obj.iso3 === pr.ISO_A3);
    //     console.log(ind);
    //     // setCases(covidData[ind].cases);
    //     // setdeaths(covidData[ind].deaths);
    //     // setRecovered(covidData[ind].recovered);
    // }
    // const onEachCountry = (country,layer)=>{
    //     // layer.on('click',setCountryName(country.properties.ADMIN));
    //     layer.bindPopup(country.properties.ADMIN);
    //     // layer.on('click',getCovidData(country.properties.ADMIN));
    // }
    
    useEffect(load, []);
    // useEffect(getCovidData, []);
    
    return (
        <div>
           <MapContainer className="w-full flex justify-center items-center bg-red-200" style={{height:"90vh"}} zoom={2} center={[20,30]} >
               <GeoJSON style={mapStyle} data={countries} onEachFeature={(country,layer)=>{
                    // layer.on({
                    //     click: findCountry(country.properties)
                    // })
                    // var popup = <Popup>
                    //     <h3>{country.properties.ADMIN}</h3>
                    //     <p><br />Cases : {cases}
                    //         <br />Deaths : {deaths}
                    //         <br />Recovered : {recovered}
                    //     </p>
                    // </Popup>;
                    layer.bindPopup(`<b>${country.properties.ADMIN}</b><br>${country.properties.ISO_A3}`);
                    
                }} />
           </MapContainer>
                {/* <div className="container-wrap flex flex-col shadow-md w-full items-center justify-center container mx-auto">  
                    <div className="flex flex-col sm:flex-row mt-6 mont object-scale-down">
                        <div className="data-cont bg-yellow-200 ">
                            Total Cases<div className="country">{countryName}</div>
                            <div className="data text-yellow-500 shadow-sm">{data.cases}</div>
                        </div>
                        <div className="data-cont bg-red-200">
                            Total Deceased<div className="country">{countryName}</div>
                            <div className="data text-red-500 shadow-sm">{data.deaths}</div>
                        </div>
                        <div className="data-cont bg-green-100">
                            Total Recovered<div className="country">{countryName}</div>
                            <div className="data text-green-500 shadow-sm">{data.recovered}</div>
                        </div>
                    </div>
                </div>    */}
            </div>
    )
}

export default CovidMap
