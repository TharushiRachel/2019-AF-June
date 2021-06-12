import React from 'react';

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="/view-category">View Categories</a>
        <a className="nav-link" href="/view-room">View Rooms</a>
        <a className="nav-link" href="/create-category">Create Category</a>
        <a className="nav-link" href="/create-room">Create Room</a>
        <a className="nav-link" href="/purchase-room">Select Rooms</a>
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
 
            </div>
        )
    }
}

export default Navbar;