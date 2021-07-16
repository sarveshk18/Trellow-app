import React, { Component } from "react";
import "./App.css";
import { TASKS } from "./constants";
import StatusBoard from "./components/StatusBoard";
import { TaskStatus } from "./enum";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: TASKS
    };
  }

  updateTaskStatus = (id, taskStatus, priority) => {
    const { tasks } = this.state;
    const modifiedTask = tasks.map((task) => {
      if (id == task.id) {
        return { ...task, status: taskStatus, priority: priority };
      }
      if (task.priority >= priority && task.status == taskStatus) {
        return { ...task, priority: ++task.priority };
      }
      return task;
    });
    this.setState({
      tasks: modifiedTask
    });
  };

  render() {
    const { tasks } = this.state;
    return (
      <div className="App">
        <div className="board">
          {Object.keys(TaskStatus).map((status) => (
            <StatusBoard
              tasks={tasks.filter((x) => x.status === TaskStatus[status].id)}
              taskCategory={TaskStatus[status]}
              updateTaskStatus={this.updateTaskStatus}
              key={TaskStatus[status].id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
