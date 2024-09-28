import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import WhereToStay from "./pages/WhereToStay";
import NavBar from "./components/common/NavBar";
import ThingTodo from "./pages/ThingTodo";
import LoginPage from "./pages/LoginPage"
import PlanMyTrip from "./pages/PlanMyTrip";
import { useEffect, useState } from "react";
import HillStations from "./components/ExperienceKerala/HillStations";
import WildLife from "./components/ExperienceKerala/WildLife";


function App() {
  const [loading,setLoading] = useState(true)
  
  useEffect(()=>{
   const timer =  setTimeout(()=>{
      setLoading(false)
    },1000)
   return ()=>clearTimeout(timer)
  })
  const location = useLocation()
  const showNavbar = location.pathname !== '/login'
  return (
    
    <div className="App">
      {showNavbar && <NavBar/>}
      <Routes>
        <Route path="/" element = {<Home loading={loading}/>}/>
        <Route path="login" element = {<LoginPage loading={loading}/>}/>

        {/* <Route path="login" element = {<LoginPage/>}/> */}
        <Route path="explore" element = {<Experience loading={loading}/>}/>
        <Route path="hillStations" element = {<HillStations loading={loading}/>}/>
        <Route path="wildlife" element = {<WildLife loading={loading}/>}/>
        
        <Route path="stay" element = {<WhereToStay loading={loading}/>}/>
        <Route path="thingsTodo" element = {<ThingTodo loading={loading}/>}/>
        <Route path="planMyTrip" element = {<PlanMyTrip loading={loading}/>}/>
     
      </Routes>
    </div>
  );
}

export default App;
 