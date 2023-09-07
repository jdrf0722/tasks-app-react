import { useState } from "react";
import { TaskContext } from "../context/TaskContext.jsx";
import { useContext } from "react";

function Form({ taskId, showInputs }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { updateTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({
      taskId,
      title,
      description,
    });
    setTitle("");
    setDescription("");
    showInputs(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Update your task title"
        className="p-2 mb-3 mt-4 rounded-md bg-slate-200 w-full text-center text-black"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        placeholder="Type your task desciption"
        className=" block mb-4 rounded-md text-center resize-none pt-5 bg-slate-200 w-full text-black"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 px-2 py-1 rounded-md mt-4 hover:bg-blue-400 w-full block"
      >
        Save
      </button>
    </form>
  );
}

function TaskUpdate({ taskId }) {
  const [showInputs, setShowInputs] = useState(false);

  const Update = () => (
    <button
      className="bg-blue-500 px-2 py-1 rounded-md mt-1.5 sm:mt-4 hover:bg-blue-400 w-full block"
      onClick={() => {
        setShowInputs(true);
      }}
    >
      Update
    </button>
  );

  return (
    <>
      {showInputs ? (
        <Form showInputs={setShowInputs} taskId={taskId} />
      ) : (
        <Update />
      )}
    </>
  );
}

export default TaskUpdate;
