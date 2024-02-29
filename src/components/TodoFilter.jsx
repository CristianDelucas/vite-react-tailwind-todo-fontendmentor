const TodoFilter = ({ setFilter, filter }) => {
  return (
    <section className="container mx-auto mt-8 ">
      <div className="flex justify-center gap-4 rounded-md bg-white p-4">
        <button
          onClick={() => setFilter("all")}
          className={` ${filter === "all" ? "text-blue-600 hover:text-gray-600" : "text-gray-600 hover:text-blue-600"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`hover:text-blue-600 ${filter === "active" ? "text-blue-600 hover:text-gray-600" : "text-gray-600 hover:text-blue-600"}`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`hover:text-blue-600 ${filter === "completed" ? "text-blue-600 hover:text-gray-600" : "text-gray-600 hover:text-blue-600"}`}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
