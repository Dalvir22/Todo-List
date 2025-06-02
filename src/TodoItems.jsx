import React, { useState } from 'react'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const TodoItems = ({ data, deleteTodo, updateTodo, doneTodo,index }) => {

  const [startupdate, setStartupdate] = useState(false)
  const [inputvalue, setInputvalue] = useState(data.title)
  return (
    <div style={{
      backgroundColor: data.status == "done" ? "lightgreen" : "red",
      width: "90%",
      margin: "auto",
      padding: "5px",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "5px"
    }}>
      {
        !startupdate ?
          <span >{Number(index)+1}-{data.title}</span>
          :
          <input value={inputvalue} onChange={(e) => setInputvalue(e.target.value)} type='text' style={{ backgroundColor: "transparent", border: "2px solid red", outline: "none", borderRadius: "5px" }} />
      }
      <div>
        {
          data.status == "pending"?
            <div>
              {
                !startupdate ?
                  <div>
                    <button style={{ backgroundColor: "green", borderRadius: "100%", padding: "0px 0px" }} onClick={() => doneTodo(data.id)}><IoCheckmarkDoneCircleOutline size={25} color='white' /></button>
                    <button style={{ backgroundColor: "blue", borderRadius: "100%", padding: "0px 0px" }} onClick={() => setStartupdate(true)}><HiOutlinePencilSquare size={25} color='white' /></button>
                  </div>
                  :
                  <button style={{ backgroundColor: "blue", color: "white", borderRadius: "5px" }} onClick={() => {
                    updateTodo(data.id, inputvalue)
                    setStartupdate(false)
                  }
                  }>save</button>
              }
            </div>
            :
            <button style={{ backgroundColor: "red", borderRadius: "100%", padding: "0px 0px" }} onClick={() => deleteTodo(data.id)}><MdDelete size={25} /></button>
        }
      </div>
    </div>
  )
}

export default TodoItems
