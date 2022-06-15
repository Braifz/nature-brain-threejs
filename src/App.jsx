import Header from "./components/Header";
import Cube from "./components/Cube";
import "./App.css";
import ThreeScene from "./components/ThreeScene";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  return (
    <div className="App">
      <Header title="title" text="some texts" />
      <ThreeScene>
        <Cube />
        <OrbitControls />
        <ambientLight />
      </ThreeScene>
    </div>
  );
};

export default App;
