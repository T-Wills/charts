import { Pie } from 'react-chartjs-2'
import React, {useEffect, useState} from "react"
import Axios from "axios";
import styles from "../home/styles.module.css";

const PieChart = () => {
  const [region, setRegion] = useState([])
  const [datainfo, setDataInfo] = useState([])
  const [nameOfCity, setNameOfCity] = useState([])
  const [numberOfFrequency, setNumberOfFrequency] = useState([])
    
  const fetchData = () => {
    Axios.post("https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub",{
      "angular_test" : "angular-developer"
    })
      .then((response) => {
        setDataInfo(response.data);

        let region = []
        for(let i = 0; i < response.data.length; i++){
            region.push(response.data[i].Region);
            }
            setRegion(region);
          
            let result = sortData(region);
            setNameOfCity(result[0])
            setNumberOfFrequency(result[1]) 
        })
   } 
  useEffect(()=>{
    fetchData();
  }, []);
  console.log("region==>", region)


  const sortData = (array) => {
    let firstArray = [],
        secondArray = [],
        prev; 
  
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
    datasets: [{
      label: 'Sales performance per Region',
      data: numberOfFrequency,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(255, 105, 60)',
      ],
      hoverOffset:4
    }]
  };
  
    
 const options = {
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
      <h1 className={styles.title}>Sales by Region</h1>
    </div>
    <div className={styles.chartcontainer}>
      <Pie data={data} options={options} />
    </div>
  </>
  )
}
export default PieChart;  