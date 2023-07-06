import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="row m-0">
        <div className="col-2 sidebar"><Sidebar /></div>
        <div className="col-10">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
