import React from "react";
import "./ToDoItems.css";

export class ToDoItems extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="checkbox" 
                        name="item1" 
                        value="false"
                    ></input> Buy eggs
                    <br></br>
                    <input type="checkbox" 
                        name="item2" 
                        value="false"
                    ></input> Wash clothes
                    <br></br>
                    <input type="checkbox" 
                        name="item3" 
                        value="false"
                    ></input> Take out garbage  
                </form>
                <button>Add to-do item</button>
                <input type="text" 
                        name="newTask"></input>
            </div>

        )
    }

};