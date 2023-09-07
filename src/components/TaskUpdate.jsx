import { useState } from "react";
import { TaskContext } from "../context/TaskContext.jsx";
import { useContext } from "react";

function Form({ taskId, showInputs }) {
  const { updateTask } = useContext(TaskContext);
  const { findTask } = useContext(TaskContext);
  const [title, setTitle] = useState(findTask(taskId).title);
  const [description, setDescription] = useState(findTask(taskId).description);


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
        placeholder="Update title"
        className="text-xs sm:text-base p-1 sm:p-2 mb-3  rounded-md bg-slate-200 w-full text-center text-black"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        placeholder="Update desciption (optional)"
        className=" block mb-4 rounded-md text-center resize-none sm:pt-2 md:pt-5 bg-slate-200 w-full text-black text-xs sm:text-base"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 sm:px-2 sm:py-1 rounded-md mt-4 hover:bg-blue-400 w-full block"
      >
        Save
      </button>
    </form>
  );
}

function TaskUpdate({ taskId }) {
  const [showInputs, setShowInputs] = useState(false);

  return (
    <>
      {showInputs ? (
        <Form showInputs={setShowInputs} taskId={taskId} />
      ) : (
        <button
      className="bg-blue-500 sm:px-2 sm:py-1 rounded-md mt-1.5 sm:mt-4 hover:bg-blue-400 w-full block"
      onClick={() => {
        setShowInputs(true);
      }}
    >
      Update
    </button>
      )}
    </>
  );
}

export default TaskUpdate;
