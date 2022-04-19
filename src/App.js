import "./App.css";
import "./app/Navbar";
import Navbar from "./app/Navbar";
import Home from "./feature/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
