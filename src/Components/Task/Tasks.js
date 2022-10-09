import React from "react";
import { Link } from "react-router-dom";

const Tasks = ({ tasks }) => {
  return (
    <section>
      <h1 style={{ margin: '1rem 0 1rem 0' }}><i class="tasks icon"></i>Tarefas</h1>
      <div className="ui relaxed divided list">
        {tasks.map((task) => (
          <div className="item">
            <i class="chess king icon"></i>
            <div className="content">
              <Link to={`/todo/tasks/${task.id}`}><a className="header">{task.description}</a></Link>
              <div className="description">{task.id}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tasks;
