import { FormEvent, useState } from "react";
import { useGlobalContext } from "../../Context";
import { Input } from "./TodoForm.styles";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useGlobalContext();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    addTodo(title);

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setTitle("");
          }
        }}
        placeholder="What do you need to do?"
      />
    </form>
  );
};

export default TodoForm;
