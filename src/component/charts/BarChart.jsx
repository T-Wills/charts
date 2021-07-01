import { Bar } from 'react-chartjs-2'
import React, {useEffect, useState} from "react"
import Axios from "axios";
import styles from "../Home/styles.module.css";

const BarChart = () => {
  const [city, setCity] = useState([])
  const [datainfo, setDataInfo] = useState([])
  const [nameOfCity, setNameOfCity] = useState([])
  const [numberOfFrequency, setNumberOfFrequency] = useState([])
    

    const fetchData = () => {
      Axios.post("https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub",{
        "angular_test" : "angular-developer"
      })
        .then((response) => {
          console.log("response data", response);
          setDataInfo(response.data);
  
          let cities = []
          for(let i = 0; i < response.data.length; i++){
            cities.push(response.data[i].City);
            }
            setCity(cities);
        
           let result = sortData(cities);
           setNameOfCity(result[0])
           setNumberOfFrequency(result[1]) 
         })
     } 
    useEffect(()=>{
      fetchData();
    }, []);
  /* console.log("cities==>", city) */

  //sort to find the total number of sales per city
  const sortData = (array) => {
    let firstArray = [],
        secondArray = [],
        prev; 
  
    //using sort() method
    array.sort();
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== prev) {
        firstArray.push(array[i]);
        secondArray.push(1);
      } else {
        secondArray[secondArray.length - 1]++;
      }
      prev = array[i];
    }
  
    return [firstArray, secondArray];
  }
  
  const data = {
    labels: nameOfCity,
    datasets: [
      {
        label: 'Sales performance per city',
        data: numberOfFrequency,
        backgroundColor: [
          "rgba(255, 99, 125, 0.3)",
          "rgba(255, 189, 7, 0.3)",
          "rgba(100, 10, 245, 0.3)",
          "rgba(120, 10, 245, 0.3)",
          
        ],
        borderColor: [
          "rgba(255, 99, 125, 1)",
          "rgba(243, 247, 6, 1)",
          "rgba(100, 10, 245, 1)",
          "rgba(120, 10, 245, 1)",
          
        ],
        borderWidth: 1,
      },
    ],
  }
  
  const options = {
      responsive: true,
      
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  return(
  <>
    <div className='title'>
      <h1 className={styles.title}>Sales Per City</h1>
    </div>
    <div className={styles.chartcontainer}>
      <Bar data={data} options={options} />
    </div>
  </>
  )
}
export default BarChart;