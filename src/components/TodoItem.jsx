import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="flex gap-4 border-b border-b-gray-400 ">
      <button
        onClick={() => updateTodo(id)}
        className={`h-6 w-6 flex-none rounded-full border-2 ${
          completed
            ? "bg  flex   items-center justify-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : "inline-block"
        }`}
      >
        {completed && <IconCheck />}
      </button>

      <p
        className={`grow text-gray-600 ${completed && "text-gray-300 line-through"}`}
      >
        {title}
      </p>
      <button className="flex-none" onClick={() => deleteTodo(id)}>
        <IconCross />
      </button>
    </article>
  );
};

export default TodoItem;
