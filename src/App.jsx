import "react-toastify/dist/ReactToastify.css";
import {Route,createBrowserRouter, createRoutesFromElements,RouterProvider} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Pages/AboutPage";
import Completedpage from "./Pages/Completedpage";
import Layout from "./Pages/Layout";
import { useState } from "react";



function App() {

  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "Exercise",
      completed: false,
    },
    {
      id: "2",
      title: "Read Book",
      completed: true,
    },
    {
      id: "3",
      title: "Do Code",
      completed: true,
    },
  ]);
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage todos={todos} setTodos={setTodos} />} />
        <Route path="about" element={<AboutPage/>} />
        <Route path="completedtodo" element={<Completedpage todos={todos} />} />
      </Route>
    )
  );
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
