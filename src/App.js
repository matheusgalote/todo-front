import Login from "./Components/Login/Login";
import Task from "./Components/Task/Task";
import TaskShow from "./Components/Task/TaskShow";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/todo" element={<Login />} />
        <Route path="/todo/tasks" element={<Task />} />
        <Route path="/todo/tasks/:id" element={<TaskShow />} />
      </Routes>
    </div>
  );
}

export default App;
