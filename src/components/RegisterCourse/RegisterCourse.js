import React from 'react';
import './RegisterCourse.css';
import { Link } from 'react-router-dom';
import Navs from '../Navbar/Navs';

const RegisterCourse = () => {
    return(
        <div>
            <Navs />
           <h1 className='center-align grey-text lighten-2'>Course Registration</h1>
           <div className='register'>
               <div className='container box'>
               <form>
                   <div className='center-align'>
                   <div className='row'>
                       <label>
                       <input type='checkbox' name="course1" />
                       <span>ABE403</span></label>
                      
                   </div>

                   <div className='row'>
                       <label>
                       <input type='checkbox' name="course1" />
                       <span>ABE401</span></label>
                      
                   </div>

                   <div className='row'>
                       <label>
                       <input type='checkbox' name="course1" />
                       <span>ABE491</span></label>
                      
                   </div>

                   <div className='row'>
                       <label>
                       <input type='checkbox' name="course1" />
                       <span>ABE482</span></label>
                      
                   </div>

                   <div className='row'>
                       <label>
                       <input type='checkbox' name="course1" />
                       <span>ABE442</span></label>
                      
                   </div>

                   <div className='row'>
                       <label>
                       <input type='checkbox' name="course1" />
                       <span>ABE424</span></label>
                      
                   </div>

                   <div className='row'>
                       <label>
                       <input type='checkbox' name="course1" />
                       <span>ABE413</span></label>
                      
                   </div>

                   <div className='row'>
                       <label>
                       <input type='checkbox' name="course1" />
                       <span>ABE451</span></label>
                      
                   </div>

                   <div className='row'>
                       <label>
                       <input type='checkbox' name="course1" />
                       <span>ABE433</span></label>
                      
                   </div>

                   <div className='row'>
                       <label>
                       <input type='checkbox' name="course1" />
                       <span>FEG404</span></label>
                      
                   </div>
                   
                   <Link to='#' className='btn green darken-2 white-text waves-effect waves-light'>
                      <span> Register Now </span>
                      <i className='material-icons right'>send</i>
                       </Link>
                   </div>
               </form>
               </div>
           </div>


        </div>
    )
}

export default RegisterCourse;