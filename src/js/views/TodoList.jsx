import React, { useState } from "react";

const Tasks = {
  pending: "",
};

const TodoList = () => {
  const [task, setTask] = useState(Tasks);
  const [allTask, setAllTask] = useState([]);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.pending.trim() != "") {
      setAllTask([...allTask, task]);
      setTask(Tasks);
      setError(false);
    } else {
      setError(true);
      console.log();
    }
  };

  //   const PressOnClick = (event) => {};

  return (
    <>
      <div className="container">
        <ul>
          <h1>To Do List!</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="What do you need to do?"
              name="pending"
              className="form-control"
              value={task.pending}
              onChange={handleChange}
            ></input>
            {error ? (
              <div className="alert alert-danger">
                "The cell mustn't be empty" <i class="far fa-frown"></i>
              </div>
            ) : null}

            {allTask.map((item, index) => {
              return (
                <li key={index} className="form-control">
                  {item.pending}{" "}
                  <i
                    className="fas fa-trash-alt"
                    onClick={() =>
                      setAllTask(
                        allTask.filter(
                          (t, currentIndex) => index != currentIndex
                        )
                      )
                    }
                  ></i>
                </li>
              );
            })}
          </form>
        </ul>
        <div className="numberTasks form-control">
          {allTask.length} tasks left
        </div>
      </div>
    </>
  );
};

export default TodoList;