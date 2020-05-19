import React, { Component } from 'react';
import Signinnav from './Signinnav';
import { withRouter } from 'react-router-dom';
import './signin.css';




class Signin extends Component{
    state = {
        regno : "",
        password: ""
    }


    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
     
      } 


    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.history.push('home')
        
        
      } 
    
  
    render() {

        
        return(
            <div className='signin'>
                <Signinnav />

                <div className="container containers ">
            <div className="row">
                <form className="col s12 white" id="reg-form" onSubmit={this.handleSubmit}>
                <div className="row">
            
                <h2 className='text-white grey center '> Login</h2>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <label >Reg No</label>
                    <input id="regno" type="text" className="validate"   onChange={this.handleChange }/>
                    
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                    <input id="password" type="password" className="validate" minLength="6"  onChange={this.handleChange} />
                    <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                

                    <div className="input-field center">
                    <button className="btn btn-register waves-effect waves-light" type="submit" name="action">
                       Login
                    </button>
                    </div>
                </div>
                </form>
            </div>
            </div>
             </div>

            

        )
    }
    

    }
   
export default withRouter(Signin);