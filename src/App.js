//import ReactDOM from "react-dom/client";
//import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Create from "./components/create/create";
import Read from "./components/read/read";
import Update from "./components/update/update";
import Delete from "./components/delete/delete";
//import { Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  // <Router>
  //   <div className="main">
  //     <div>
  //       <h2>React CRUD Operation</h2>
  //     </div>
  //     <div>
  //       <Routes path="/create" component={Create} />
  //     </div>
  //     <div className="read-block">
  //       <Routes path="/read" component={Read} />
  //     </div>
  //     <Routes path="/update" component={Update} />
  //     <Routes path="/delete" component={Delete} />
  //   </div>
  // </Router>

  // <Router>
  return (
    <>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="create" element={<Create />} />
          <Route path="read" element={<Read />} />
          <Route path="update" element={<Update />} />
          <Route path="delete" element={<Delete />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
