import React from 'react';
import axios from 'axios';

class CreateCategory extends React.Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            cname:'',
            cdescription:''
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault();
        let category={
            name:this.state.cname,
            description:this.state.cdescription
        }

        axios.post('http://localhost:8080/category/create', category)
    .then(response => {
      alert('Data successfully inserted')
    })
    .catch(error => {
      console.log(error.message);
      alert(error.message)
    })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
  <div className="mb-3">
    <label htmlFor="categoryName" class="form-label">Name</label>
    <input type="text" class="form-control" id="categoryName" name="cname" value={this.state.cname} onChange={this.onChange} aria-describedby="emailHelp"/>
  </div>

  <div class="mb-3">
    <label for="categoryDescription" class="form-label">Description</label>
    <input type="text" class="form-control" id="categoryDescription" name="cdescription" value={this.state.cdescription} onChange={this.onChange} />
  </div>

 

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
        )
    }
}

export default CreateCategory;