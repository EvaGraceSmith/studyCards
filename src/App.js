import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom";



function App() {

  return (
    <div className="App">
      <Navbar/>
      {/* // Outlet is a placeholder for the content of the current route found in index.js */}
      <Outlet />
    </div>
  );
}

export default App;
