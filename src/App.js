import { Header } from "./components/Header";
import Footer from "./components/Footer";
import Task from "./components/Task";
import About from "./components/About";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./index.css";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
// import { FaTasks } from "react-icons/fa";

function App() {
  const [showAddTask, setShowAddTask] = useState(true);
  const [task, setTask] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTask(taskFromServer);
    };
    getTasks();
  }, []);

  // fetch task
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/task");
    const data = await res.json();
    console.log(data);
    return data;
  };

  const fetchTask = async (id) =>{

    const res = await fetch(`http://localhost:5000/task/${id}`)
    const data = await res.json()
    console.log(data)
    return data
  }

  // Add Task
  const AddTasks = async (tasks) => {
    const res = await fetch("http://localhost:5000/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(tasks),
    });

    const data = await res.json();

    setTask([...task, data]);

    // const id = Math.floor(Math.random() * 100) +1;
    // const newTask = {id, ...tasks}
    // setTask([...task, newTask])
  };

  // deleteTask

  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/task/${id}`, {
      method: "DELETE",
    });

    // console.log("deleted item")
    setTask(task.filter((x) => x.id !== id));
  };

  // togglr remender
  const toggleReminder = async(id) => {

    const taskToggle = await fetchTask(id);
    const updateTask = {...taskToggle, reminder: !taskToggle.reminder}

    const res = await fetch(`http://localhost:5000/task/${id}`,{
      method:"PUT",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify(updateTask)
    })

   const data = await res.json();

    setTask(
      task.map((x) => (x.id === id ? { ...x, reminder: data.reminder } : x))
    );
  };
//   const taskfunc =(props) => {

//     return (<div>
  
//     {showAddTask && <AddTask onAdd={AddTasks} />}
// {task.length > 0 ? (
// <Task task={task} onDelete={deleteTask} onToggle={togglrReminder} />
// ) : (
// `No Task Found`
// )}
  
//   </div>)} 

  return (
    <BrowserRouter>
    <div className="container">
      <Header
        title={"Task Tracker"}
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
        />
      
      <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddTask && <AddTask onAdd={AddTasks} />}
                {task.length > 0 ? (
                  <Task
                    task={task}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
