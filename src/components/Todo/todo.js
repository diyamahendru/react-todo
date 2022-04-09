import React, { useState } from "react";
import "./styles.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (inputData) {
      setList([...list, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (i) => {
    const updated = list.filter((item, id) => {
      return id !== i;
    });
    setList(updated);
  };

  const deleteAll = () => {
    setList([]);
  };

  return (
    <>
      <div className="header">
        <h1>Let's make our TODO List !!</h1>
      </div>
      <div className="input-item">
        <input
          placeholder="Add Items"
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <i
          className="fi fi-rr-add add-logo"
          title="Add Item"
          onClick={addItem}
        ></i>
      </div>
      <div className="show-list">
        {list.map((item, i) => {
          return (
            <div className="each-item" id={i}>
              <p className="item">{item}</p>
              <i
                className="fi fi-sr-cross-circle delete-logo"
                onClick={() => deleteItem(i)}
              ></i>
            </div>
          );
        })}
      </div>
      <div className="delete-all">
        <button className="delete-button" onClick={deleteAll}>
          Remove All
        </button>
      </div>
    </>
  );
};

export default Todo;
