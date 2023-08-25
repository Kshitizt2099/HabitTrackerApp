import { Component } from "react";
import { ADDDATA, subtract } from "./Redux/action";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Habits from "./Components/Habits/Habits";
import Home from "./Components/Home";
import Details from "./Components/Details/Details";
export default class App extends Component{

 
  render()
   {
     const{store}=this.props 
     
     return(
      <BrowserRouter basename="/HabitTrackerApp">
        <Routes>
          <Route exact path="/" element={<Home store={store}/>}/>
          <Route exact path="/Allhabits" element={<Habits store={store}/>}/>
          
          <Route exact path="/Details/:id" element={<Details store={store}/>}/>



          
          
          </Routes>  
      </BrowserRouter>


     )
   
    
 
   }
     
   
   

}

