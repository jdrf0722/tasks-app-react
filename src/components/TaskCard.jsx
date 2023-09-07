import { TaskContext } from "../context/TaskContext.jsx";
import TaskUpdate from './TaskUpdate.jsx'
import { useContext } from "react";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-3 md:p-6 rounded-md ">
      <div className="overflow-hidden">
        <p className="text-xl font-bold capitalize mb-2">{task.title}</p>
        <p className="text-gray-500 text-sm">{task.description} </p>
      </div>
      <div className="">
        <TaskUpdate key={task.id} taskId={task.id}/>
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
