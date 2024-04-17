import React, { useState, useEffect } from "react";
import AddLayout from "./AddLayout";
import UpdateLayout from "./UpdateLayout";
import DeleteLayout from "./DeleteLayout";
import axios from "axios";

const ShowLayout = () => {
  const [layout, setlayout] = useState([]);
  const [activeForm, setActiveForm] = useState("");

  const fetchLayout = async () => {
    const { data } = await axios.get(`/api/theatres/layout`);
    setlayout(data);
  };

  useEffect(() => {
    fetchLayout();
  }, []);

  return (
    <div>
      <h2>Layout</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Layout Id</th>
            <th>Rows</th>
            <th>Columns</th>
            <th>Divider</th>
            <th>Silvercost</th>
            <th>Goldcost</th>
          </tr>
        </thead>
        <tbody>
          {layout.map((layout) => (
            <tr key={layout.layoutId}>
              <td>{layout.layoutId}</td>
              <td>{layout.rows}</td>
              <td>{layout.columns}</td>
              <td>{layout.divider}</td>
              <td>{layout.silvercost}</td>
              <td>{layout.goldcost}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: "center" }}>
        <div style={{ padding: "20px" }}>
          <button
            className="btn btn-outline-danger"
            style={{ margin: "10px" }}
            onClick={() => setActiveForm("add")}
          >
            Add Layout
          </button>
          <button
            className="btn btn-outline-danger"
            style={{ margin: "10px" }}
            onClick={() => setActiveForm("update")}
          >
            Update Layout
          </button>
          <button
            className="btn btn-outline-danger"
            style={{ margin: "10px" }}
            onClick={() => setActiveForm("delete")}
          >
            Delete Layout
          </button>
        </div>

        {activeForm === "add" && <AddLayout />}
        {activeForm === "update" && <UpdateLayout />}
        {activeForm === "delete" && <DeleteLayout />}
      </div>
    </div>
  );
};

export default ShowLayout;
