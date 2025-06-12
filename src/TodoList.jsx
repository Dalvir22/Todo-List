import React, { useState } from 'react'
import TodoItems from './TodoItems'




const TodoList = () => {
  const [inputvalue, setInputvalue] = useState("")
  const [tododata, setTododata] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  let l = tododata.length;
  // let id=0;
  // if(l==0)
  // {
  //   id=1;
  // }
  // else{
  //   id=tododata[l-1].id+1
  // }
  function addTodo() {
    let newTodo = {
      id: l ? (tododata[l - 1].id + 1) : 1,
      title: inputvalue,
      status: "pending"
    }
    setTododata([...tododata, newTodo])
    localStorage.setItem("todos", JSON.stringify([...tododata, newTodo]))
  }
  function deleteTodo(id) {
    let newTodoArray = [];

    for (let i = 0; i < tododata.length; i++) {
      if (tododata[i].id !== id) {
        newTodoArray.push(tododata[i]);
      }
    }
    setTododata(newTodoArray)
    localStorage.setItem("todos", JSON.stringify(newTodoArray))
  }
  function updateTodo(id, data) {
    let newTodoArray = [];
    for (let i = 0; i < tododata.length; i++) {
      if (tododata[i].id == id) {
        tododata[i].title = data
      }
      newTodoArray.push(tododata[i])
    }
    setTododata(newTodoArray)
    localStorage.setItem("todos", JSON.stringify(newTodoArray))
  }

  function doneTodo(id) {
    let newTodoArray = [];
    for (let i = 0; i < tododata.length; i++) {
      if (tododata[i].id == id) {
        tododata[i].status = "done"
      }
      newTodoArray.push(tododata[i])
    }
    setTododata(newTodoArray)
    localStorage.setItem("todos", JSON.stringify(newTodoArray))
  }
  console.log(tododata)
  return (
      <div style={{
        height: "auto", backgroundImage:
          "url('https://mrwallpaper.com/images/thumbnail/doddle-4k-lo-fi-x17bthllyfiqv1n0.webp')", width: "35%", margin: "auto", borderRadius: "10px", border: "2px solid lightblue"
      }}>
        <div><h1 style={{ color: "white", textAlign: "center" }}>TODO-LIST</h1></div>


        <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px " }}>

          <input value={inputvalue} onChange={(e) => setInputvalue(e.target.value)}
            type="text"
            placeholder="Enter a task"
            style={{
              padding: "10px",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              width: "80%",
              color: "black",

            }}
          />
          <button onClick={addTodo} style={{ backgroundColor: "lightgreen", borderTopRightRadius: "5px", borderBottomRightRadius: "5px" }}>+Add</button>
        </div>

        {
          tododata.map((list, index) => {
            return <TodoItems index={index} key={list.id} data={list} deleteTodo={deleteTodo} updateTodo={updateTodo} doneTodo={doneTodo} />
          })
        }

      </div>
    
  )
}

export default TodoList
