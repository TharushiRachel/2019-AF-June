
import './App.css';
import NavBar from './components/navBar/navBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateCategory from './components/createCategory/createCategory';
 import CreateRoom from './components/createRoom/createRoom';
 import ViewCategories from './components/Category/category';
import ViewRooms from './components/Room/room';
import Rooms from './components/Category/room';
import CalculateTotal from './components/calculateAmount/calculateAmount';

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar/>
        <section>
          <Switch>
            <Route path="/create-category" component={CreateCategory} />
            <Route path="/create-room" component={CreateRoom}/>
            <Route path="/view-category" component={ViewCategories}/>
            <Route path="/view-room" component={ViewRooms}/>
            <Route path="/:id" component={Rooms}/>
            <Route path="/purchase-room" component={CalculateTotal}/>
            <Route path="/delete/:id" component={ViewRooms}/>
          </Switch>
        </section>
      </Router>
      
    </div>
  );
}

export default App;
