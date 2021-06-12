import React from 'react';
import axios from 'axios';
import Select from 'react-select';


class CreateRoom extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onCategorySelect=this.onCategorySelect.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            rcode:'',
            ramount:0,
            rwing:'',
            rpax:'',
            categories:[],
            options:[],
            selectedCategories:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/category/')
        .then(response=>{
            this.setState({categories: response.data.data},()=>{
                let data=[];
                this.state.categories.map((item,index)=>{
                    let category={
                        value:item._id,
                        label:item.name
                    }
                    data.push(category)
                });
                this.setState({options:data});
            })
        })
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    onCategorySelect(e){
        this.setState({selectedCategories:e? e.map(item=>item.value):[]});
    }

    onSubmit(e){
        e.preventDefault();
        let room={
            code:this.state.rcode,
            amount:this.state.ramount,
            wing:this.state.rwing,
            pax:this.state.rpax,
            categories:this.state.selectedCategories
        }
        axios.post('http://localhost:8080/room/create',room)
        .then(response=>{
            alert('Data successfully inserted')
        })
        .catch(error=>{
            console.log(error.message);
            alert(error.message)
        })
    }

    render() {
        return (
             <div>
                 <form onSubmit={this.onSubmit} >
  <div className="mb-3">
    <label htmlFor="roomCode" class="form-label">Code</label>
    <input type="text" class="form-control" id="roomCode" name="rcode" value={this.state.rcode} onChange={this.onChange} aria-describedby="emailHelp"/>
  </div>

  <div class="mb-3">
    <label for="roomAmount" class="form-label">Amount</label>
    <input type="Number" class="form-control" id="roomAmount" name="ramount" value={this.state.ramount} onChange={this.onChange} />
  </div>

  <div class="mb-3">
    <label for="roomWing" class="form-label">Wing</label>
    <input type="text" class="form-control" id="roomWing" name="rwing" value={this.state.rwing} onChange={this.onChange} />
  </div>

  <div class="mb-3">
    <label for="roomPax" class="form-label">Pax</label>
    <input type="Number" class="form-control" id="roomPax" name="rpax" value={this.state.rpax} onChange={this.onChange} />
  </div>

  <div class="mb-3">
    <label htmlFor="roomCategories" class="form-label">Categories</label>
    <Select
  options={this.state.options}
  onChange={this.onCategorySelect}
  className="basic-multi-select"
  isMulti
  />
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
             </div>
        );
    }
}

export default CreateRoom;