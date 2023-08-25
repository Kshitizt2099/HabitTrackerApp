import React from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { REMOVESTATUS, UPDATESTATUS } from '../../Redux/action'
import WeekView from '../WeekView/WeekView'
import "./Details.css"
const Details = (props) => {
    const store=props.store
    const{id}=useParams()
    const data=store.getState()
    const curr=data.filter(i=>(i.hid==id))
    const init=curr[0].week
    const [week,setweek]=useState(init)
    const [render,setrender]=useState(0)
    
    const habitname=curr[0].name
    
  


    
    const status=(index,dayid)=>{
      console.log(index)
      store.subscribe(()=>{ setrender(render+1)})
      store.dispatch(UPDATESTATUS(index,dayid))
      console.log("here",store.getState())
      const newdata=store.getState()
      const currday=newdata.filter(i=>(i.hid==id))
      
      const curweek=currday[0].week
      console.log("currweek",curweek)
     
      store.subscribe(()=>{setweek(curweek)})
      console.log("week",week)

      
    }
    const reducestatus=(index,dayid)=>{
      console.log(index)
      store.subscribe(()=>{ setrender(render+1)})
      store.dispatch(REMOVESTATUS(index,dayid))
      console.log(store.getState())
      const newdata=store.getState()
      const currday=newdata.filter(i=>(i.hid==id))
      
      const curweek=currday[0].week
      store.subscribe(()=>{setweek(curweek)})
      console.log("currweek",curweek)
     
      
      console.log("week",week)
      console.log("comehere")
    }
    
    console.log(render)
  return (
    <>
    <div className='header'>
    <Link to="/AllHabits"><img  height={30} width={30} src="https://cdn-icons-png.flaticon.com/512/467/467274.png"/></Link>
     
      <div className='rightcard'>
      
      <h4>{habitname}</h4>
      <h4>{curr[0].done}/7</h4>
      <h4>% Completion {parseInt(curr[0].done*100/7)}</h4>
      </div>
      
    </div>

<div className='View'>
     
       
       <div className='habitsView'>
       {week.map((i)=>(<WeekView key={i.did} data={i} status={status} id={id} reducestatus={reducestatus}/>))}
       </div>
       
    </div>
    </>
  
  )
}

export default Details
