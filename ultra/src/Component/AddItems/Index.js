import React,{Component} from "react";
import './stayle.css';

class AddItems extends Component{

  state ={
    name : "",
    age : ''
  }

  handelchange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value

    })
  }
  handelSubmit =(e) =>{
    e.preventDefault();
    if(e.target.name.value===''){
      return false
    }
    else {this.props.tt(this.state)
      this.setState({
        name:'',
        age:''
      })}
  }
    render(){
      return(
    <div>
        <form onSubmit={this.handelSubmit}>
           <input type='text' placeholder="Enter your name...." id="name" onChange={this.handelchange} value={this.state.name}/>
           <input type='number' placeholder="Enter your age...." id="age" onChange={this.handelchange} value={this.state.age}/>
           <input type='submit' value='Add' />
       </form>
  </div>
   );
   
     }
   } 

   export default AddItems;