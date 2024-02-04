import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Diet from "./components/Diet/Diet";
import Room from "./components/Room/Room";
import Calorie from "./components/Calorie";
import Landing from "./components/Landing";
import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect, useState } from "react";
import Excercise from "./components/Exercise/Exercise";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exlist from "./components/Exlist";
<link href="API" rel="stylesheet"></link>
function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    alanBtn({
        key: 'KEY',
        onCommand: (commandData) => {
          if (commandData.command === 'go:back') {
            // Call the client code that will react to the received command
          }
        }
    });
  }, []);
 
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 8000);
  });

  if (!show) {
    return <Loader />;
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div style={{ marginTop: "100px" }}>
          <Routes>
            <Route path="/" element={<Landing moveIndex={0} />} />
            <Route path="/room" element={<Room />} />
            <Route path="/diet" element={<Diet moveIndex={1} />} />
            <Route path="/home" element={<Landing moveIndex={0} />} />
            <Route path="/calorie" element={<Calorie />} />
            <Route path="/excercise" element={<Exlist />} />
            <Route path="/sukhasana" element={<Excercise moveIndex={2} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
