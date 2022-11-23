import React, { useState } from "react";

const EditTaskModal = () => {
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    const Task = form.Task.value;
    const AssignTo = form.AssignTo.value;
    const Date = form.Date.value;
    const EndDate = form.EndDate.value;
    const Remark = form.Remark.value;
  };
  return (
    <div>
      <>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          + Add Task
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Add Task</h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <form className="form_dashbord" onSubmit={handleSubmit}>
              <label For="Task">Task&nbsp;&nbsp;</label>
              <br />
              <input type="text" id="Task" name="Task" />
              <br />
              <label For="AssignTo">AssignTo&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <br />
              <input type="text" id="AssignTo" name="AssignTo" />
              <br />
              <label For="Date">Date&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <br />
              <input type="text" id="Date" name="Date" />
              <br />
              <label For="EndDate">EndDate</label>
              <br />
              <input type="text" id="EndDate" name="EndDate" />
              <br />
              <label For="Remark">Remark</label>
              <br />
              <input type="text" id="Remark" name="Remark" />
              <br />
              <input type="submit" value="submit" />
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default EditTaskModal;
