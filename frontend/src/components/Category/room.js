import React from 'react';
import axios from 'axios';

class Rooms extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            rooms:[]
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/category/${this.props.match.params.id}`)
        .then(response => {
          this.setState({ rooms: response.data.data })
        })
        .catch(error => {
          alert(error.message)
        })
    }

    render() {
        return (
             <div className="container" >
                 <h1>Rooms in this Category</h1>
                 {/* {this.state.rooms.length>0 && this.state.rooms.map((item,index)=>(
                     <div key={index} className="card mb-3">
                         <h5>Code : {item.code}</h5>
                         <h5>Amount : {item.amount}</h5>
                         <h5>Wing : {item.wing}</h5>
                         <h5>Pax : {item.pax}</h5>
                     </div>
                 ))} */}

{this.state.rooms.length > 0 && this.state.rooms.map((item, index) => (
    <div key={index} className="card mb-3">
        <div className="p-3">
        <h5>Code : {item.code}</h5>
                         <h5>Amount : {item.amount}</h5>
                         <h5>Wing : {item.wing}</h5>
                         <h5>Pax : {item.pax}</h5>
        </div>
    </div>
))}
             </div>
        );
    }
}

export default Rooms;