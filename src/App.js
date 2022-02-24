import './App.css';
import  {Route,BrowserRouter  as Router, Routes} from 'react-router-dom'
import Login from './components/userauth/login';
import Register from './components/userauth/register';
import UserDetails from './components/usermanagment/userdetails';
import AddUser from './components/usermanagment/adduser';
import Recharts from './components/recharts/recharts';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/userdetails" element={<UserDetails />}></Route>
          <Route exact path="/adduser" element={<AddUser/>} ></Route>
          <Route exact path="/recharts" element={<Recharts/>}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
