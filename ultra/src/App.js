import React,{Component} from 'react';
import TodoItems from './Component/todoItems/Index';
import AddItems from './Component/AddItems/Index';

class App extends Component{


  state ={

    items:[{id:1,name:'abaas',age:22},
           {id:2,name:'fakhrdeen',age:23},
           {id:3,name:'mohammed',age:24}]
  }

  deleteItems = (id) =>{
    let items=this.state.items.filter(items =>{
      return items.id!=id
    })
    this.setState({items:items})
        }



  Additems = (item) =>{
    item.id=Math.random();
    let items=this.state.items
    items.push(item);
    this.setState({
      items:items
    })

  }      
  render(){
 
    return(
       <div className='container'>
       <h1 className='text-center'> Todo List</h1>
       <TodoItems oo={this.state.items} deleteItems={this.deleteItems}/>
       <AddItems tt={this.Additems}/>
       </div>
 );
 
   }
 } 
  

export default App;
