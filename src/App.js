import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Drop from './containers/Drop'
import Title from './containers/Title'
// import UserList from './containers/user-list'
// import UserDetail from './containers/user-detail'
// import WeaponList from './containers/weapon-list'
import Chart from './containers/chart'
import 'bootstrap/dist/css/bootstrap.min.css'
import SecondChart from './containers/secondChart.js'
import Earning from './containers/Earning.js'
// import { Button } from 'reactstrap';
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

// const App2=()=>(
//   <div>
//     <h2>Username List:</h2>
//     <UserList/>
//     <hr/>
//     <h2> Username Details : </h2>
//     <UserDetail/>
//         <hr/>
//     <h2> Available Weapon : </h2>
//         <WeaponList/>
//   </div>
// )
