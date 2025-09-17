import { createRoot } from "react-dom/client";
import React, { useState } from "react";

function Application() {
  const [tasks, setTask] = useState([
    { description: "something" },
    { description: "something else" },
  ]);
  return (
    <ul>
      {tasks.map((t) => (
        <li>{t.description}</li>
      ))}
    </ul>
  );
}

createRoot(document.getElementById("app")).render(<Application />);
