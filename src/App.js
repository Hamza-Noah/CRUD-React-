import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Porducts from "./Components/Proudcts";
import Porduct from "./Components/Product";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";

function App() {
  return (
    <div className="App">
      <div className="row m-0">
        <div className="col-12 p-0">
          <Navbar />
        </div>
        <div className="sidebar col-2 p-0 pt-5">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Porducts />} />
            <Route path="/products">
              <Route index element={<Porducts />} />
              <Route path="add" element={<AddProduct />} />
              <Route path=":id" element={<Porduct />} />
              <Route path="edit/:id" element={<EditProduct />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
