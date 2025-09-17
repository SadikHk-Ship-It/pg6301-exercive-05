import React, { useState } from "react";

export function Application() {
  const [tasks, setTask] = useState([
    { description: "something" },
    { description: "something else" },
  ]);
  return (
    <>
      <h1>My tasks</h1>
      <ul>
        {tasks.map((t) => (
          <li>{t.description}</li>
        ))}
      </ul>
      <h2>New Task</h2>
      <form>
        <div>
          <input type="text" />
        </div>
        <button>Add Task</button>
      </form>
    </>
  );
}
