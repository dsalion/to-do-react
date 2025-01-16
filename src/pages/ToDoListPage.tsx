import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { ToDoList } from "../components/ToDolist/ToDoList";
import { ToDo } from "../models/todo-item";

export const ToDoListPage = () => {
  const todos: ToDo[] = [
    {
      id: 0,
      text: "Первая задача",
      isDone: true,
    },
    {
      id: 1,
      text: "Вторая задача",
      isDone: false,
    },
    {
      id: 2,
      text: "Третья задача",
      isDone: false,
    },
    {id:3,
        text: "Четвертая задача",
        isDone: true
    }
  ];
  return (
    <>
      <Header />
      <Form />
      <ToDoList todos={todos}/>
    </>
  );
};
