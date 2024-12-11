import React, { useState } from "react";
import Todo from "./Todo";
import "./mystyles.css"

export default function Create() {
  const [newTask, setNewTask] = useState("");
  const [createTask, setCreateTask] = useState(false);
  const [emptyMsg, setEmptyMsg] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleChange = (e: any) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newTask === "") {
      setEmptyMsg("Task should not be empty");
      setTimeout(() => {
        setEmptyMsg("");
      }, 1000);
    } else {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
      setCreateTask(false);
    }
  };

  const handleCreateTask = () => {
    setCreateTask(true);
  };
  return (
    <div>
      {!createTask && <button onClick={handleCreateTask}>Create</button>}
      {createTask && (
        <form onSubmit={handleSubmit}>
          <label>
            Task Todo:
            <input type="text" value={newTask} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
          <br />
        </form>
      )}
      {emptyMsg != "" && <span>{emptyMsg}</span>}

      <Todo tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
