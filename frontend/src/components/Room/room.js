import React from 'react';
import axios from 'axios';

class ViewRooms extends React.Component{
    constructor(props){
        super(props);
        this.onRoomSelect=this.onRoomSelect.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            rooms:[],
           
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/room/')
        .then(responce=>{
          // console.log('Cou', responce.data);
            this.setState({rooms: responce.data.data})
        })
        .catch(error => {
            alert(error.message)
          })

          
    }

    onRoomSelect(e){
        this.setState({selectedRooms:e? e.map(item=>item.value):[]});
    }

    onSubmit(e){
        e.preventDefault();
        let rooms={
            rooms:this.state.selectedRooms
        }

        axios.delete(`http://localhost:8080/room/delete/${this.props.match.params.id}`)
          .then(response =>{
              //this.setState({deleteRoom: response.data.data})
              alert('Room Deleted')
          })
          .catch(error => {
            alert(error.message)
    })

    }
    

    render() {
        return (
             <div>
                 <h1>View Rooms</h1>
                 {this.state.rooms.length>0 && this.state.rooms.map((item,index)=>(
                     <div key={index} className="card mb-3">
                        
                         <h5>Code : {item.code}</h5>
                         <h5>Amount : {item.amount}</h5>
                         <h5>Wing : {item.wing}</h5>
                         <h5>Pax : {item.pax}</h5>
                         <button onSubmit={this.onSubmit}>Delete</button>
                     </div>
                 ))}
             </div>
        );
    }
}

export default ViewRooms;