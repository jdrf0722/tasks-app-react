import Taskcard from "./TaskCard.jsx";
import { TaskContext } from "../context/TaskContext.jsx";
import { useContext } from "react";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-2xl md:text-4xl font-bold text-center">No tasks yet</h1>;
  }

  return (
    <div className="grid p-6 msm:p-0 msm:grid-cols-2 md:grid-cols-4 gap-6 msm:gap-2">
      {tasks.map((task) => (
        <Taskcard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
