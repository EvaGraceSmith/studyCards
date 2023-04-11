import Navbar from './components/Navbar';
import Home from './components/Home';
import { Outlet } from "react-router-dom";



function App() {

  return (
    <div className="App">
      <Navbar/>

      <Home/>
      <Outlet />
    </div>
  );
}

export default App;
