import React,{Component} from "react";
import './stayle.css';


const TodoItems=(props)=>{
const {oo,deleteItems} = props;
let length=oo.length;
const ListItems = length ? ( oo.map(items =>{
  return(
    <div key={items.id}>
      <span className="name">{items.name}</span>
      <span className="age">{items.age}</span>
      <span className="action icon" onClick={()=>deleteItems(items.id)}>&times;</span>

    </div>
  )
})) : (<p>there is no itmes to showe</p>)

      return(
         <div className="ListItems">
          <div>
          <span className="name title">Name</span>
          <span className="age title">Age</span>
          <span className="action title">Action</span>

          </div>
            {ListItems}
         </div>
   );
   
     }

   export default TodoItems;