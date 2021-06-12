import React from 'react';
import axios from 'axios';
import Select from 'react-select';

class CalculateTotal extends React.Component{
    constructor(props){
        super(props);
        this.onRoomSelect=this.onRoomSelect.bind(this);
        this.state={
            rooms:[],
            options:[],
            selectedRooms:[],
            totalAmount:''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/room/')
        .then(response=>{
            this.setState({rooms: response.data.data},()=>{
                let data=[];
                this.state.rooms.map((item,index)=>{
                    let room={
                        value:item._id,
                        label:item.name
                    }
                    data.push(room)
                });
                this.setState({options:data});
            })
        })
        
        }

        onRoomSelect(e){
            this.setState({selectedRooms:e? e.map(item=>item.value):[]});
        }

        render(){
            return(
                <div>
                    <h1>Select Rooms</h1>
                    <div class="mb-3">
                    <label htmlFor="courseSubjects" class="form-label">Rooms</label>
                    <Select
                        options={this.state.options}
                        onChange={this.onRoomSelect}
                        className="basic-multi-select"
                         isMulti
                    />
  </div>
                </div>
            )
        }
}

export default CalculateTotal;
