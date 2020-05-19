 import React, {Component} from 'react';
import Axios from 'axios';
import Navs from '../Navbar/Navs';
 

class ClassCard extends Component { 

    state ={
        ClassList: [],
        photo:[]
    }

    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            this.setState({
                ClassList: res.data
            })
        })

    }
    render() {
        const {ClassList} = this.state;
        const names = ClassList.length ? (
            ClassList.map(user=>{
                return(
                    <div className='row '>
                        <div className='col s12 m6 l6 '>
                        <div className='card' key={user.id}>
                            <div className='card-content'>
                            <span className='card-title center'>{user.username } </span>
                            <div className='center'><img src={`https://robohash.org/${user.id}?200*200`} alt='faces' /></div>
                            <div className='center red-text'>{user.name}</div>
                            <div className='center grey-text'>{user.email}</div>
                            </div>
                       </div>
 
                        </div>
                        
                    </div>
                   
                )
            })
        ) : (
            <div className='container center valign-wrapper '>loading....</div>
        )

       return(
           <div>
               <Navs />
            {names}
           </div>
       )

    }

    
 }

 export default ClassCard;