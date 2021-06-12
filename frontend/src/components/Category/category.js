import React from 'react';
import axios from 'axios';

class ViewCategories extends React.Component{
    constructor(props){
        super(props);
        this.state={
            categries:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/category/')
        .then(responce=>{
          // console.log('Cou', responce.data);
            this.setState({categries: responce.data.data})
        })
    }

    navigateRoomPage(e, categoryId){
        window.location=`/${categoryId}`
    }

    render() {
        return (
             <div>
                 <h1>View All Categories</h1>
                 {this.state.categries.length>0 && this.state.categries.map((item,index)=>(
                     <div key={index} className="card mb-3">
                         <div className="p-3" onClick={e=>this.navigateRoomPage(e,item._id)} >
                         <h5>Name : {item.name}</h5>
                        <h5>Description : {item.description}</h5>
                         </div>
                            
                     </div>
                 ))}
             </div>
        );
    }
}

export default ViewCategories;