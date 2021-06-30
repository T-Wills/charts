import { Bar } from 'react-chartjs-2'
import React, {useEffect, useState} from "react"
import Axios from "axios";
import styles from "../home/styles.module.css";

const CompositeBar = () => {
  const [segment, setSegment] = useState([])
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

        let segments = []
        for(let i = 0; i < response.data.length; i++){
            segments.push(response.data[i].Segment);
            }
            setSegment(segments);
          
            let result = sortData(segments);
            setNameOfCity(result[0])
            setNumberOfFrequency(result[1]) 
        })
   } 
  useEffect(()=>{
    fetchData();
  }, []);
  console.log("segments==>", segment)

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
           axis: 'y',
           label: 'Sale performance By Segment',
           data: numberOfFrequency,
           fill: false,
           backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(255, 159, 64, 0.2)',
               'rgba(255, 205, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(54, 162, 235, 0.2)',
               'rgba(153, 102, 255, 0.2)',
               'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
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
      <h1 className={styles.title}>Sales Per Segment</h1>
    </div>
    <div className={styles.chartcontainer}>
      <Bar data={data} options={options} />
    </div>
  </>
  )
}
export default CompositeBar;  