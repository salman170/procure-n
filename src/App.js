import { About } from "./components/About/About";
import Frequently from "./components/FAQ/Frequently";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
    <Frequently/>

    </div>
  );
}

export default App;
