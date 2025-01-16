import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import "./ToDoList.scss";
import { ToDo } from "../../models/todo-item";

export const ToDoList = (props: { todos: ToDo[] }) => {
 

  
  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        {props.todos.map((item, idx) => { 
            if(item.isDone === false)
                 return (<ToDoListItem toDoItem={item} key={idx} />)
})}
        {/* <ToDoListItem toDoItem={todo1} /> */}
      </ul>
      <ul className="todo-list completed">
      {props.todos.map((item, idx) => { 
            if(item.isDone === true)
                 return (<ToDoListItem toDoItem={item} key={idx} />)
})}
      </ul>
    </div>
  );
};
