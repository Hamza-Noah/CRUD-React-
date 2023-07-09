import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Porduct from "./Components/Proudcts";
import AddProduct from "./Components/AddProduct";

function App() {
  return (
    <div className="App">

      {/* <div class="container-fluid"> */}
        <div className="row m-0">
          <div className="col-12 p-0">
            <Navbar />
          </div>
          <div className="col-2 sidebar">
            <Sidebar />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/products" element={<Porduct />}>
                <Route path="add" element={<AddProduct />} />
              </Route>
              <Route path="/products/add" element={<AddProduct />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
