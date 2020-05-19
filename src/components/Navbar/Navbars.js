import React from 'react';
import './Navbars.css';
import ToggleButton from '../SideDrawer/ToggleButton'
import { NavLink } from 'react-router-dom'


const Navbars = props =>{
    return (
        <header className='headings'>
             <nav  className='toolbar_navigation nav-wrapper light-green accent-2'>
                 <div>
                     <ToggleButton click={props.ToggleClickHandle}/>
                 </div>
            
            <div className='toolbar_logo '>
               <div className='' style={{fontWeight: 'bold'}}>Agric and Bioresources Engineering </div>
            </div>     
              <div className='spacer' />  
              <div className='toolbar_navigation_items'></div>
                <ul  >
                    <li style={{fontStyle: 'italic'}}><NavLink to="/">Sign out</NavLink></li>
                </ul>
                
              
                
            

        </nav>


        </header>
       
    )
}

export default Navbars;