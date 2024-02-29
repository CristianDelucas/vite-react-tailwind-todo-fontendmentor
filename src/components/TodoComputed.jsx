const TodoComputed = ({ clearCompletedTodo, countTodo }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white px-4 py-4">
      <span className="text-gray-400">{countTodo()} items left</span>
      <button onClick={() => clearCompletedTodo()} className="text-gray-400">
        Clear Completed
      </button>
    </section>
  );
};

export default TodoComputed;
