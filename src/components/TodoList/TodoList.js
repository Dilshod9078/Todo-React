import React, { useState } from "react";
import Modal from "../Modal/Modal";
import toast, { Toaster } from "react-hot-toast";

function TodoList({ stateTodo , setStateTodo}) {
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [updateValue, setupdateValue] = useState("");

  const [updateId, setUpdateId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const updateBtn = (evt) => {
    setModal(true);
    const updateData = stateTodo.find((item) => item.id == evt.target.id);
    setupdateValue(updateData.value);
    setUpdateId(evt.target.id);
  };

  const updateForm = (evt) => {
    evt.preventDefault();
    const updateTodo = stateTodo.find((item) => item.id == updateId);
    updateTodo.value = updateValue;
    setModal(false);
    toast.success("Muvaffaqiyatli yangilandi!");
    setStateTodo([...stateTodo])
  };

  const deleteBtn = (evt) => {
    setDeleteModal(true);
    setDeleteId(evt.target.id);
  };

  const deleteClickBtn = (evt) => {
    const data = stateTodo.findIndex((item) => item.id == deleteId);
    stateTodo.splice(data, 1);
    setDeleteModal(false);
    toast.success("Ma'lumot o'chirildi");
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <ul className="w-[700px] mx-auto my-7 flex flex-col gap-[10px]">
        {stateTodo.length > 0 &&
          stateTodo.map((item, index) => (
            <li
              key={index}
              className="w-full p-2 flex items-center justify-between rounded-md bg-teal-500 font-semibold text-[19px]"
            >
              <div>
                <span>{index + 1}. </span>
                <span>{item.value}</span>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  id={item.id}
                  onClick={updateBtn}
                  className="bg-blue-500 transition hover:scale-110 text-white text-[20px] p-2 w-[100px] rounded-md"
                >
                  Update
                </button>
                <button
                  id={item.id}
                  onClick={deleteBtn}
                  className="bg-red-500 transition hover:scale-110 text-white text-[20px] p-2 w-[100px] rounded-md"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}

        <Modal modal={modal} setModal={setModal}>
          <form
            onSubmit={updateForm}
            className="p-5 rounded-lg mx-auto flex flex-col justify-center items-center"
          >
            <div className="flex items-end justify-between w-full">
              <label className="w-full flex flex-col gap-[10px] items-start">
                <span className="font-semibold text-[20px]">
                  Enter your update todo
                </span>
                <input
                  onChange={(evt) => setupdateValue(evt.target.value)}
                  value={updateValue}
                  className="w-[90%] p-2 rounded-md"
                  name="todoName"
                  placeholder="Enter your update todo"
                  type="text"
                  autoComplete="off"
                />
              </label>
              <button className="p-2 mt-5 transition hover:scale-110 rounded-md w-[25%] bg-blue-500 text-white text-center text-[20px]">
                Save
              </button>
            </div>
          </form>
        </Modal>

        <Modal modal={deleteModal} setModal={setDeleteModal}>
          <h2 className="text-[24px] text-center font-bold text-white">
            Are you sure you want to delete it?
          </h2>
          <div className="flex items-center justify-center space-x-5 mt-5">
            <button
              onClick={() => setDeleteModal(false)}
              className="bg-blue-500 transition hover:scale-110 text-white text-[20px] font-bold rounded-md p-2"
            >
              Cancel
            </button>
            <button
              onClick={deleteClickBtn}
              className="bg-red-500 transition hover:scale-110 text-white text-[20px] font-bold rounded-md p-2"
            >
              Delete
            </button>
          </div>
        </Modal>
      </ul>
    </>
  );
}

export default TodoList;
