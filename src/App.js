import React, { useEffect } from 'react'
import ReactHighcharts from 'react-highcharts/ReactHighstock.src';
import {configPrice} from "./config";

const App = () => {
// TODO: The Below code need for furture
// useEffect(() => {

// }, []);

  return <div>
     <ReactHighcharts config = {configPrice}></ReactHighcharts>
  </div>
};

export default App;