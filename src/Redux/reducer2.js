import { weekdetailcreator } from "./WeekManagement";

let initial=[]
if(localStorage.getItem("habits")===undefined)
{
    localStorage.setItem("habits", JSON.stringify(new Array(0)));
    initial=[]
}
else{
    let habits=localStorage.getItem("habits")
    initial=JSON.parse(habits)
}

export function reducer(state=initial,action)
{
     if(action.type==="ADDDATA")
     {
        const id=Math.random()*10;
        const data={
            hid:id,
            name:action.name,        
            done:0,
            total:7,
            week:weekdetailcreator(id)
          
        
        
        }
       
        state.push(data)
        localStorage.setItem("habits",JSON.stringify(state))
        return state
     }
     if(action.type==="DELDATA")
     {
        console.log("inside deldata")
        const element=action.element
        
        const newstate=state.filter((i)=>(element.hid!==i.hid))
        console.log("newstate",newstate)
        localStorage.setItem("habits",JSON.stringify(newstate))
        state=newstate
        console.log("state",state)
        return state
     }
     if(action.type==="UPDATESTATUS")
     {
        
        const id=action.id
        const dayid=action.dayid
        console.log("the id is:",id)
        const target=state.findIndex((i)=>(id==i.hid))
        console.log("the target is:",target)
        console.log("the curr done is:",state[target].done)
        const week=state[target].week
        console.log("target day id",dayid)
        const targetday=week.findIndex((i)=>(i.did==dayid))
     
      if(week[targetday].status!=="Done")
      {
        if(state[target].done<7)
        {
            state[target].done+=1;
        }
        console.log("target day",week[targetday])
        week[targetday].status="Done"
        
        localStorage.setItem("habits",JSON.stringify(state))
        console.log("state",state)

      }
      
        
        return state
     }
     if(action.type==="REMOVESTATUS")
     {
        const id=action.id
        const dayid=action.dayid
        console.log("the id is:",id)
        const target=state.findIndex((i)=>(id==i.hid))
        console.log("the target is:",target)
        console.log("the curr done is:",state[target].done)
        const week=state[target].week
        console.log("target day id",dayid)
        const targetday=week.findIndex((i)=>(i.did==dayid))
     
      if(week[targetday].status=="Done")
      {
        if(state[target].done>0)
        {
            state[target].done-=1;
        }
        console.log("target day",week[targetday])
        week[targetday].status="Notdone"
        
        localStorage.setItem("habits",JSON.stringify(state))
        console.log("state",state)

      }
      
        
        return state        

     }
     return state
}