import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Welcome from './components/Welcome';
import Variable from './components/Variable';

function App() {

  
  return (
    <div className="App">
    <div className="App">
      <Link to="/"> Home</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/welcome">Welcome</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/4">Number</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/hello">Word</Link>
      <Routes>
        <Route path="/welcome" element={<Welcome />}/>
        <Route path=":word" element={<Variable />}/>
        <Route path=":word/:bgColor/:textColor" element={<Variable />}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
