import React, { useState } from "react";
import ToDoItem from "./ToDoItem"

function App() {
  const [inputText, setInputText] = useState(" ");
  const [listItems, setListItems] = useState([]);

  function handleChange(event) {
    const new_value = event.target.value;
    setInputText(new_value);
  }

  function addItem() {
    setListItems((prevlistItems) => {
      return [...listItems, inputText];
    });
    setInputText(" ");
  }

  function clearItems(){
    setListItems([]);
  }

  function deleteItem(id){
    setListItems(prevlistItems => {
        return prevlistItems.filter(
          (item, index) => {
            return index !== id;
          }
        );
    });
  }



  return (
    <><div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((todoitem, index) => (
            <ToDoItem
            key={index}
            id={index}
            item={todoitem}
            onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
    <div className="clear">
        <button onClick={clearItems}><span>Clear</span></button>
      </div></>
      
  );
}

export default App;
