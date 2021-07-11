import React from 'react';
import { ToDoItems } from "../ToDoItmes/ToDoItems";
import { ThingsDone } from "../ThingsDone/ThingsDone";
// import './App.css';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state.wrongDudu = {
       toDoItems: [],
       thingsDone: []
    }

  }
  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <ToDoItems />

        <h1>Things Done</h1>
        <ThingsDone />

      </div>
    )
  }
  
}

export default App;
