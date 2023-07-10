import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Porducts from "./Components/Proudcts";
import Porduct from "./Components/Product";
import AddProduct from "./Components/AddProduct";

function App() {
  return (
    <div className="App">
      <div className="row m-0">
        <div className="col-12 p-0">
          <Navbar />
        </div>
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Porducts />} />
            <Route path="/products">
              <Route index element={<Porducts />} />
              <Route path="add" element={<AddProduct />} />
              <Route path=":id" element={<Porduct />} />
            </Route>
            {/* <Route path="/products/:id" element={<Porduct />} /> */}
            <Route path="/products/add" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
