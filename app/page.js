"use client";
import { useState } from "react";

const page = () => {
  const [task, setTask] = useState("");
  const [description, setdescription] = useState("");
  let [mainTask, setMainTask] = useState([]);

  let renderTask = <h2>No Task Available</h2>;
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { task, description }]);
    console.log(mainTask);
    setTask("");
    setdescription("");
  };
  let removeTask = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between m-3">
          <div className="text-white flex  justify-between text-center w-2/3">
            <h2>
              {i + 1}. {t.task}
            </h2>
            <h2>{t.description}</h2>
          </div>
          <button
            className=" bg-red-500 rounded p-2"
            onClick={() => {
              removeTask(i);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <h1 className="bg-black text-white text-center font-bold ">
          My TODO List
        </h1>
        <input
          type="text"
          placeholder="Enter Task"
          className="border-2 border-black rounded m-5 p-3 outline-none"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Enter description"
          className="border-2 border-black rounded m-5 p-3 outline-none"
          value={description}
          onChange={(a) => {
            setdescription(a.target.value);
          }}
        ></input>
        <button className="border-2 border-black m-5 p-3 text-white bg-black rounded-3xl ">
          Assigned
        </button>
      </form>
      <div className="p-9 bg-slate-400 ">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
