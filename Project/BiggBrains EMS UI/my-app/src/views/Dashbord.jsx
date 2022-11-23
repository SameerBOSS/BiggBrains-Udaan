import React from "react";
import EditTaskModal from "./components/EditTaskModal";

const column = [
  {
    task: "tak",
    time: "11/8/2023",
    endTime: "12/8/2023",
    remark: "hello",
  },
];
const Dashbord = (column) => {
  return (
    <>
      <nav class="navbar navbar-light justify-content-between">
        <a class="navbar-brand">Navbar</a>
        <EditTaskModal />
      </nav>
      <div className="container">
        <table className="table_dashbord">
          <thead className="table_head">
            <th>name</th>
            <th>time</th>
            <th>End Time</th>
            <th>remark</th>
          </thead>
          <tbody className="table_body">
            <td>{column.task}</td>
            <td>{}</td>
            <td>11:24</td>
            <td>----------</td>
          </tbody>
          <tbody className="table_body">
            <td>sameer</td>
            <td>10:00</td>
            <td>11:24</td>
            <td>----------</td>
          </tbody>
          <tbody className="table_body">
            <td>sameer</td>
            <td>10:00</td>
            <td>11:24</td>
            <td>----------</td>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashbord;
