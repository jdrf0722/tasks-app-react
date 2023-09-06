import { TaskContext } from "../context/TaskContext.jsx";
import { useContext } from "react";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className=" bg-gray-800 text-white rounded-md ">
      <div className="px-6 py-4">
        <div class="font-bold text-xl mb-2">{task.title}</div>
        <p className="text-gray-500 text-sm">{task.description} </p>
      </div>
      <div className="p-4">
        <button
          className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400 w-full block"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
