import { Component } from "react";


import { Link } from "react-router-dom";
import { ADDDATA } from "../Redux/action";
import "./Home.css"
export default class Home extends Component{

  constructor()
  {
    super()
    this.state={value:'',name:'',add:false}
  }
  
  
  increase=()=>{

    const {store}=this.props
    store.subscribe(()=>{ this.forceUpdate()})
    
    store.dispatch(ADDDATA(this.state.name))
    this.setState({add:true})
  }

  addnotice=()=>{
    this.setState({add:false})
  }
  
  render()
   {
     
    const {store}=this.props
    console.log(store.getState())
    const arr=store.getState()
    return(

       <div className="bg">
  
      
  
      
  <Link to="/Allhabits"><button>AllHabits</button></Link>
  
      <div class="book-background">
      {this.state.add==true?<div className="infoadd"><div className="overlay"><br/><br/>Habit added<br/> <img  src="https://img.freepik.com/free-psd/x-symbol-isolated_23-2150500369.jpg?w=740&t=st=1692895500~exp=1692896100~hmac=87ad792f1f8ea150502226c5e687cfdadbfa60fc900893a1c4723da4de83df92"width={30} height={30} onClick={this.addnotice}/></div></div>:""}
   <div class="login-container">
 
     
     <h1>Welcome to Habit Tracker App</h1>
     <label>Enter Habit Name</label><br/><br/>
     <input type="text" onChange={(e)=>{ this.setState({name:e.target.value})}}/>
      <br/>
      <button onClick={this.increase}>Add</button>
    
        
                 
   </div>
 </div> 
  
      
   

       </div>
   
     );
 
   }
     
   
   

}

