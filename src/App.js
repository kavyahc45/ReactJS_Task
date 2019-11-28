import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './Components/Restfull_web_service/Contact/Contact';
import Users from './Components/Restfull_web_service/Users/Users';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
// // import Userinput from './Components/Userinput/Userinput';
// // import Useroutput from './Components/Useroutput/Useroutput';
import Lifecycle from './Components/Lifecycle/Lifecycle';
// // import Color from './Components/Color/Color';
import DemoA from'./Components/Arthmaticoperation/DemoA';

function App() {

  return (

    <div className="App">
      <Router>
        <switch>
          <Route exact path='/' component={Signup}></Route>
          <Route exact path='/signin' component={Signin}></Route>
          {/* <Route exact path='/Userinput' component={Userinput}></Route> */} 
          {/* <Route exact path='/Useroutput' component={Useroutput}></Route> */}
          <Route exact path='/Lifecycle' component={Lifecycle}></Route>
          <Route exact path='/Arthmaticoperation' component={DemoA}></Route>
          <Route exact path='/Users' component={Users}></Route>
          {/* <Color /> */}
          {/* <DemoA/> */}
        </switch>
      </Router>
    </div>
  );
}

export default App;