import { Line } from 'react-chartjs-2'
import React, {useEffect, useState} from "react"
import Axios from "axios";
import styles from "../home/styles.module.css";

const LineChart = () => {
  const [statename, setStateName] = useState([])
  const [datainfo, setDataInfo] = useState([])
  const [nameOfCity, setNameOfCity] = useState([])
  const [numberOfFrequency, setNumberOfFrequency] = useState([])
    
  const fetchData = () => {
    Axios.post("https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub",{
      "angular_test" : "angular-developer"
    })
      .then((response) => {
        setDataInfo(response.data);

        let states = []
        for(let i = 0; i < response.data.length; i++){
            states.push(response.data[i].State);
            }
            setStateName(states);
          
            let result = sortData(states);
            setNameOfCity(result[0])
            setNumberOfFrequency(result[1]) 
        })
   } 
  useEffect(()=>{
    fetchData();
  }, []);
  console.log("statename==>", statename)


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
      label: 'Sales performance per State',
      data: numberOfFrequency,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
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
      <h1 className={styles.title}>Sales by State</h1>
    </div>
    <div className={styles.chartcontainer}>
      <Line data={data} options={options} />
    </div>
  </>
  )
}
export default LineChart;  