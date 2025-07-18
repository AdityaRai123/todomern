// UpdateTask: Modal component for updating an existing task
import React, { useEffect, useState } from "react";
import "./Todo.css";
import axios from "axios";
import { toast } from "react-toastify";
import "./Update.css";

// Props: display (function to show/hide modal), update (task object to update)
const Update = ({ display, update }) => {
  // Set input fields when the update prop changes
  useEffect(() => {
    setInputs({
      title: update.title,
      body: update.body,
    });
  }, [update]);

  // State for input fields
  const [Inputs, setInputs] = useState({
    title: update?.title || "",
    body: update?.body || "",
  });

  // Handle input changes for title/body
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  // Submit the updated task to the backend
  const submit = async () => {
    await axios
      .put("http://localhost:3000/api/v2/updateTask/${update._id}", Inputs)
      .then((response) => {
        toast.success(response.data.message);
      });

    display("none");
  };

  // Render the update modal UI
  return (
    <div className="p-5 d-flex justify-content-center align-items-center flex-column">
      <h3>Update Your Task</h3>
      {/* Input for updated title */}
      <input
        type="text"
        className="todo-inputs my-4 w-100 p-3"
        //value={Inputs.title}
        name="title"
        onChange={change}
      />
      {/* Textarea for updated body */}
      <textarea
        className="todo-inputs w-100 p-3"
        //value={Inputs.body}
        name="body"
        onChange={change}
      />
      <div>
        {/* Button to submit update */}
        <button className="btn btn-dark my-4" onClick={submit}>
          UPDATE
        </button>
        {/* Button to close modal */}
        <button
          className="btn btn-danger my-4 mx-3"
          onClick={() => {
            display("none");
          }}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default Update;
