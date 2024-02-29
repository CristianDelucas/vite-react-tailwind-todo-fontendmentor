import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim()) {
      createTodo(title);
      setTitle("");
    }

    setTitle("");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4"
    >
      <span className=" inline-block h-5 w-5 rounded-full border-2 "></span>
      <input
        className="w-full border-none text-gray-400 outline-none"
        type="text"
        placeholder="Create a new todo..."
        name="title"
        value={title}
        onChange={handleChange}
      />
    </form>
  );
};

export default TodoCreate;
