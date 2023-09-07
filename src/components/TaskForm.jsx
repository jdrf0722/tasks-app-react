import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-lg">
        <h1 className="text-2xl font-bold mb-3 text-white text-center">
          Create your Task
        </h1>
        <input
          placeholder="Type your task"
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          value={title}
          className="text-center p-3 w-full mb-3 mt-4 rounded-lg bg-slate-200"
        />
        <textarea
          placeholder="Type your task desciption"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className=" pt-5 w-full mb-2 rounded-md text-center resize-none bg-slate-200"
        ></textarea>
        <div className="flex justify-center items-center">
          <button className="bg-indigo-500 px-4 py-2 text-white rounded-lg w-full mb-4">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
