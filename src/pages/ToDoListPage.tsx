import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { ToDoList } from "../components/ToDolist/ToDoList";

export const ToDoListPage = () => {
  return (
    <>
      <Header />
      <Form />
      <ToDoList />
    </>
  );
};
