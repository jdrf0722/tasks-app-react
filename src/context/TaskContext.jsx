import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]); //tasks = []

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    if (!task.title) {
      return alert("Title is needed to save a new task");
    }
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function updateTask(tasktoUpdate) {
    const newTasks = tasks.map((task) => {
      if (task.id != tasktoUpdate.taskId) {
        return task;
      } else {
        return {
          ...task,
          title: tasktoUpdate.title ? tasktoUpdate.title : task.title,
          description: tasktoUpdate.description
            ? tasktoUpdate.description
            : task.description,
        };
      }
    });
    setTasks(newTasks);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        updateTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
