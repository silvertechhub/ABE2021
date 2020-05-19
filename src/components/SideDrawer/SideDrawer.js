import React from 'react';
import './Sidedrawer.css'
import	{NavLink}	from	'react-router-dom'



const SideDrawer = props =>{
    let drawerClasses = ['side_drawer'];
    if (props.show) {
        drawerClasses =['side_drawer open']
    }

    return(
      
            <nav className={drawerClasses}>
            <ul>
                <li><NavLink to='/myprofile'>My Profile
                <i className='material-icons left'>perm_identity</i></NavLink></li>
                <hr/>
                <li><NavLink to='/ClassList'>Class List
                <i className='material-icons left'>list</i></NavLink></li>
                <hr/>
                <li><NavLink to='/course'>Course Registration
                <i className='material-icons left'>library_books</i></NavLink></li>
                <hr/>
                <li><NavLink to='/results'>Results
                <i className='material-icons left'>grade</i></NavLink></li>
                <hr/>
                <li><NavLink to='/timetable'>Time table
                <i className='material-icons left'>view_column</i></NavLink></li>
            </ul>
        </nav>
    
       

    )
}

export default SideDrawer;