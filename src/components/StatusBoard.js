import React, { Component } from "react";
import "../styles/statusBoard.css";
import { Card } from "./Card";

class StatusBoard extends Component {
  onDragOver = (e) => {
    e.preventDefault();
  };

  onDropChangePriority = (e, priority) => {
    let id = e.dataTransfer.getData("id");
    const { taskCategory, updateTaskStatus } = this.props;
    updateTaskStatus(id, taskCategory.id, priority);
  };

  render() {
    const { taskCategory, tasks } = this.props;
    const sortedTask = tasks.sort((a, b) => (a.priority > b.priority ? 1 : -1));
    return (
      <div className="boardContainer droppable">
        <div className="contentWrapper">
          <span>{taskCategory.name}</span>
          {sortedTask.map((task) => {
            return (
              <div
                className="cardWrapper"
                onDragOver={(e) => {
                  this.onDragOver(e);
                }}
                onDrop={(e) => {
                  this.onDropChangePriority(e, task.priority);
                }}
              >
                <Card id={task.id} name={task.name} key={task.id} />
              </div>
            );
          })}
          <div
            className="bottomSpace"
            onDragOver={(e) => {
              this.onDragOver(e);
            }}
            onDrop={(e) => {
              this.onDropChangePriority(
                e,
                tasks[tasks.length - 1].priority + 1
              );
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default StatusBoard;
