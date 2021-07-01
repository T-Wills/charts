import React, {useEffect, useState} from 'react';
import styles from "../home/styles.module.css";
import Nav from "../Nav";
import Axios from "axios";
import BarChart from "../charts/BarChart";
import CompositeBar from "../charts/CompositeBar";
import Line from "../charts/LineChart";
import Pie from "../charts/PieChart";
import DropDownList from "../DropDownList";

function Home() {
  const [data, setdata] = useState([])

  useEffect(()=>{
    Axios.post("https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub",{
          "angular_test" : "angular-developer"})
          .then((response) => {
          console.log(response.data);
          setdata(response.data)
      })
}, []);

    return (
        <>
        <div className={styles.parentdiv}>
           <Nav />
           <DropDownList />
           <br />
           <br />
           <br />
           <br />
           {/* <br />
           <br /> */}
            <div className="Chart" id='bar' > 
              <BarChart options={{
                responsive: true
               }}/>
            </div>
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
            <div className="Chart" id='compositebar' > 
              <CompositeBar options={{
                responsive: true
               }}/>
            </div>
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
            <div className="Chart" id='line' > 
              <Line options={{
                responsive: true
               }}/>
            </div>
           <br />
           <br />
           <br />
           <br />
           <br />
           <br />
            <div className="Chart" id='pie' > 
              <Pie options={{
                responsive: true
               }}/>
            </div>
        </div>
        </>
    )
}

export default Home
