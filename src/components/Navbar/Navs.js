import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Navs extends Component {
    render() {


        const onButtonClick = () =>{
            this.props.history.push('home')
          }
        
        return(
            <nav className='nav-wrapper light-green accent-2'>
                  <button className='btn light-green accent-3 left' onClick={onButtonClick} >
                      back
                      <i className='material-icons left'>keyboard_backspace</i></button>
                <div className='container'>
                <div className='brand-logo' style={{fontWeight: 'bold'}}>Agric nd Bioresources Engineering</div>
                <div className='brand-logo right text-grey text-lighten-2'>class of 2021</div>
                </div>
    
            </nav>
        )
    

    }
   
}

export default withRouter(Navs);