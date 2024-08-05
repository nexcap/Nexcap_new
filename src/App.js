

import Lastfooter from './Components/Lastfooter/Lastfooter';
import Navbar from './Components/Navbar/Navbar'

import { Outlet } from 'react-router-dom';
import Preloader from './Components/Preloader/Preloader';


function App() {
    return (
      <div className="App scroll-smooth" >
      <Navbar />
      <Outlet />
      <Lastfooter />
    </div>
  );
}
export default App;
