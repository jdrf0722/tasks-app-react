import { useState } from "react";

function TaskUpdate() {
  const [showInputs, setShowInputs] = useState(false);

  const Form = () => (
    <>
      <input
        placeholder="Update your task title"
        className="p-2 mb-3 mt-4 rounded-md bg-slate-200 w-full text-center text-black"
      />
      <textarea
        placeholder="Type your task desciption"
        className=" block mb-4 rounded-md text-center resize-none pt-5 bg-slate-200 w-full text-black"
      ></textarea>
    </>
  );

  const Update = () => (
    <button
      className="bg-blue-500 px-2 py-1 rounded-md mt-4 hover:bg-blue-400 w-full block"
      onClick={() => {
        setShowInputs(true);
      }}
    >
      Update
    </button>
  );

  const Save = () => (
    <button
      className="bg-blue-500 px-2 py-1 rounded-md mt-4 hover:bg-blue-400 w-full block"
      onClick={() => {
        setShowInputs(false);
      }}
    >
      Save
    </button>
  );

  return (
    <>
      {showInputs ? <Form /> : null}
      {showInputs ? <Save /> : <Update />}
    </>
  );
}

export default TaskUpdate;
