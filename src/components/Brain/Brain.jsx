import ThreeScene from "../ThreeScene";
import { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./Brain.css";
import { OrbitControls } from "@react-three/drei";
import ModelBrain from "./model/scene.gltf";

const Brain = () => {
  const gltf = useLoader(GLTFLoader, "./model/scene.gltf");
  return (
    <ThreeScene className="scene">
      <Suspense fallback={null}>
        <primitive object={gltf.scene} />
      </Suspense>
      <ambientLight />
      <mesh>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial />
      </mesh>
      <OrbitControls />
    </ThreeScene>
  );
};

export default Brain;
