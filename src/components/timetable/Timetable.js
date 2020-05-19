import React from 'react';
import timetable from './timetable.png'
import Navs from '../Navbar/Navs';


const Timetable = () => {
    return(
        <div>
            <Navs />
            <div style={{
                paddingLeft: '300px',
                paddingTop: '20px',
                paddingRight: '50px',
                paddingBottom: '100px',
            }}>
                <img alt='timetable' src={timetable}/>
            </div>
        </div>
    )
 }

export default Timetable;
