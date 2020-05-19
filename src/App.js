import React, { Component } from 'react';
// import Signin from './components/Signin';
// import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ClassCard from './components/ClassList/ClassCard';
import RegisterCourse from './components/RegisterCourse/RegisterCourse';
import Results from './components/Results/Results';
import MyProfile from './components/Profile/MyProfile';
import Timetable from './components/timetable/Timetable';
import Signin from './components/Signin/Signin';
import Particles from 'react-particles-js';
 

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
      }
    }

    

class App extends Component{

 

  render (){
    
    return(
      <BrowserRouter>
       <div className='app'>
      
          <Particles className='particles'
                params={particlesOptions} />
        <Route exact path='/' component={Signin} />
        <Route path='/myprofile' component={MyProfile} />
        <Route path='/classlist' component={ClassCard } />
        <Route path='/course' component={RegisterCourse } />
        <Route path='/results' component={Results } />
        <Route path='/timetable' component={Timetable} />
        <Route path='/home' component={Home} />

        
        
        
      </div> 

      
      </BrowserRouter>
      
    
     
        
    );
  }
}

export default App;
