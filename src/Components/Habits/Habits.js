import React, { useState } from 'react'
import HabitCard from '../HabitCard/HabitCard'
import { DELDATA } from '../../Redux/action'
import { Link } from 'react-router-dom'
import "./Habits.css"
const Habits = (props) => {
    let store=props.store
    const[arr,setarr]=useState(store.getState())
   
    const del=(data)=>{
      console.log(data,"habits")
      
     
      store.dispatch(DELDATA(data))
      setarr(store.getState())
    
     
      
      
  }
 
    
  
  return (
    <>
    <div className="Navbar">
        <Link to="/"><img className="nav" width={30} height={30} src="https://cdn-icons-png.flaticon.com/512/467/467274.png" alt='"Back'/></Link>
      </div>
  
     <div className='HabitContainer'>
     
     {arr.length===0?"No elements":arr.map((i)=>{return <HabitCard key={i.hid} store={store} data={i} del={del}/>})}
   </div>
    
    </>
   
  )
}

export default Habits
