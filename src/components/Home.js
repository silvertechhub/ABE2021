import React, { Component } from 'react';
import Navbars from './Navbar/Navbars';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import './Home.css';



class Home extends Component{

     state = {
         sideDrawerOpen: false
     };

    ToggleClickHandle = () => {
        this.setState((prevState) => {
            return{sideDrawerOpen: !prevState.sideDrawerOpen}
        });

    }


    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false}); 
    };

    render() {
        
        
        let backDrop;

        if(this.state.sideDrawerOpen) {
            
            backDrop =  <Backdrop  click={this.backdropClickHandler}/>
        }
        return (
               <div style={{height: '100%'}} className='container'>
                <Navbars  ToggleClickHandle={this.ToggleClickHandle}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backDrop}
                <main style={{marginTop: '64px'}}>
                  <h2 className="center">Welcome Back 2016354035</h2>  
                </main>
               
               <section className='section container'>
                   <div className='row'>
                       <div className='col s12 l4 asin'>
                           <p className='section-header bold'>ANNOUNCEMENT</p>
                       <p>This is to notify all those going for industrial trainning that they should 
                           endevour to pick up thier IT form at the general office on or before 32nd of may 2067.
                           failure to do this before the deadline date attracts a fee of 70kobo. <br/><br/>
                           Signed. <br/> HoD
                       </p>
                       </div>

                       <div className='col s12 l6 offset-l2 asin'>
                           <h1>PLACE YOUR ADVERTS HERE</h1>
                       </div>

                   </div>
                   
               </section>

               <section className='section container'>
                   <div className='row'>
                       <div className='col s12 l4 asin'>
                       <p className='section-header bold'>ANNOUNCEMENT</p>
                       <p className='font'>From the Course Rep Desk<br/> Students who haven't paid their course rep dues would not be allowed to write exams
                       this semester. And also if you don't pay by the end of this week you would pay 2000kobo <br/><br/>
                           Signed. <br/> Micheal
                       </p>
                       </div>

                       <div className='col s12 l6 offset-l2 asin'>
                      <h1>PLACE YOUR ADVERTS HERE</h1>
                       </div>

                   </div>
                   
               </section>

            </div>
            
        )
           
    }
}

export default Home;