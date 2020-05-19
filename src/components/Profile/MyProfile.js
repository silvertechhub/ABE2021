import React, { Component } from 'react';
import img10 from './img10.jpg'
import './MyProfile.css'
import Navs from '../Navbar/Navs';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux';

class MyProfile extends Component{ 
   
    render() {
        console.log(this.props)
        const {profile} = this.props;
       const ids = profile && profile.map(profile => {
            return(
                
                <div className='container info' key={profile.id} >
                <h4>Name:{profile.Name} </h4>
                <h4>DoB: {profile.DoB} </h4>
                <h4>Reg No: {profile.reg_no} </h4> 
                <h4>Mode of Admission: {profile.mode_of_admission} </h4> 
                <h4>Year of entry: 2067 </h4> 
    
                <div className='container waec'>
                    <h2 className='center-align'>O-level Result</h2>
                    <section className='section center-align'>
                        <p>Subject 1</p>
                        <p>Subject 2</p>
                        <p>Subject 3</p>
                        <p>Subject 4</p>
                        <p>Subject 5</p>
                        <p>Subject 6</p>
                        <p>Subject 7</p>
                        <p>Subject 8</p>
                        <p>Subject 9</p>
    
                    </section>
                   
                </div>                  
              </div>
            )
        })
        return(
            <div>
                <Navs/>
              <div>
                  <header className='container'>
                      <div  className='image_holder' >
                          <img src={img10} alt='face' className='photo'/>
                      </div>
                  </header>
              </div> <hr/>
              {ids}
              
            </div>
        )
     }
    }
    
 
const mapStateToProps = (state) => {
    console.log(state)
    return{
        profile: state.profile.profiles
    }

}


export default compose(
    connect( mapStateToProps),
    firestoreConnect([null,
        { collection: 'profile' }
    ])
)(MyProfile);
