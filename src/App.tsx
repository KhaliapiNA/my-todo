import React from 'react';
import './App.css';
import {TaskType, TodoList} from "./TodoList";

function App() {
    let tasks: Array<TaskType>=[
        {id:1, title: "CSS", isDone: true},
        {id:2, title: "JS", isDone: true},
        {id:3, title: "React", isDone: false}
    ];
  /*  let tasks2: Array<TaskType>=[
        {id:1, title: "Terminator", isDone: false},
        {id:2, title: "Demon slayer", isDone: true},
        {id:3, title: "Dogma", isDone: true}
    ];*/
    function removeTask(id: number){
        let resultTasks=tasks.filter(()=> {return true});
    }
    return (
        <div className="App">
            <TodoList title={"What to learn"} tasks={tasks}/>


        </div>
    );
}

export default App;
