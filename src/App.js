import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './containers/Title'
import Chart from './containers/chart'
import 'bootstrap/dist/css/bootstrap.min.css'
import SecondChart from './containers/secondChart.js'
import Earning from './containers/Earning.js'
import TotalSale from './containers/TotalSales'
import ProgressBar from './containers/progress-bar'
import NavBar2 from './containers/NavBar2'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Title/>
      <NavBar2/>
      <ProgressBar/>
      <TotalSale/>
      <Chart/>
      <SecondChart/>
      <Earning/>
      </div>
    );
  }
}

export default App;

