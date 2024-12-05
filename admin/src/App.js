import logo from './logo.svg';
import './App.css';
import Navbar from './components/common/Navbar';
import SideBar from './components/common/SideBar';
import ProfileMenu from './components/common/ProfileMenu';
import SideBarItem from './components/common/SideBarItem';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <SideBar/>
       <ProfileMenu/>
      <Footer/>
    </div>
  );
}

export default App;
