import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Shoe = ({...props}) => {
  const group = useRef()
  const {nodes, materials } = useGLTF('./shoe.glb')
  return (  
  );
}
 
export default Shoe;