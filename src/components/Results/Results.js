import React from 'react';
import {Link} from 'react-router-dom';
import Navs from '../Navbar/Navs';


const Results = () =>{
    return(
        <div>
            <Navs />
        <div className='container '>
            <h2 className='center'>Results</h2>
            <ul className='collection'>
                <li className='collection-item transparent'><Link to='/'>Level 100</Link></li>
                <li className='collection-item transparent'><Link to='/'>Level 200</Link></li>
                <li className='collection-item transparent'><Link to='/'>Level 300</Link></li>
                <li className='collection-item transparent'><Link to='/'>Level 400</Link></li>
                
            </ul>
        </div>
        </div>
    )
}

export default Results;