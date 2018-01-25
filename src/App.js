import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import UserList from './containers/user-list'
// import UserDetail from './containers/user-detail'
// import WeaponList from './containers/weapon-list'
import Chart from './containers/chart'
import 'bootstrap/dist/css/bootstrap.min.css'
import SecondChart from './containers/secondChart.js'
import TopTwo from './containers/TopTwo.js'
// import { Button } from 'reactstrap';
import BApp from './BootStrapTest'
import ProgressBar from './containers/progress-bar'
import NavBar from './containers/NavBar'
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
class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
      <ProgressBar/>
      <BApp/>
      <Chart/>
      <SecondChart/>
      <TopTwo/>
      </div>
    );
  }
}

export default App;

