// TaskCard: Displays a single task with actions for complete, update, and delete
import React from "react";
import "./Todo.css";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { IoMdDoneAll } from "react-icons/io";
import { FaCheckSquare } from "react-icons/fa";

// Props: title, body, id, delid, tickid, display, updateId, tobeUpdate
const TodoCards = ({
  title,
  body,
  id,
  delid,
  tickid,
  display,
  updateId,
  tobeUpdate,
}) => {
  return (
    // Card container for a single task
    <div className="d-flex justify-content-between p-2 todo-card">
      <div class="d-flex">
        {/* Mark task as complete */}
        <div
          class=""
          onClick={() => {
            tickid(id);
          }}
        >
          <FaCheckSquare style={{ color: "white" }} class="m-1 mr-2" />
        </div>
        <div className="d-flex flex-column">
          {/* Task title */}
          <h5 style={{ color: "white" }}>{title}</h5>
          {/* Optionally show task body/description */}
          {/* <p className="todo-card-p">{body.split("", 77)}...</p> */}
        </div>
      </div>
      <div className="d-flex">
        {/* Update task button */}
        <div
          class="mx-3"
          onClick={() => {
            display("block");
            tobeUpdate(updateId);
          }}
        >
          <div className="rounded-icon">
            <GrDocumentUpdate
              className="card-icons"
              style={{ color: "white" }}
            />
          </div>
        </div>
        {/* Delete task button */}
        <div
          className=""
          style={{ color: "white" }}
          onClick={() => {
            delid(id);
          }}
        >
          <MdDelete className="card-icons" />
        </div>
      </div>
    </div>
  );
};

export default TodoCards;
