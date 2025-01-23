import React from "react";
import { FbxStyle } from "./styles";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useGLTF } from "@react-three/drei";
import get3dModelsPath from "../../../utils/get3dModelsPath";


const FBXModel = ({position,rotation}) => {
  const fbx = useLoader(FBXLoader, get3dModelsPath("rubik.fbx"));
  if (!fbx) {
    console.error("FBX file could not be loaded");
    return null;
  }
  return <primitive object={fbx} rotation={rotation} position={position}/>;
};

// const Model = () => {
//   const { scene } = useGLTF(get3dModelsPath("pathfinder.glb"));
//   return <primitive object={scene} />;
// };

const Fbx = () => {
  const rotation = [Math.PI / 5, 0, 0];

  return (
    <FbxStyle>
      <Canvas camera={{ position: [0, 5, 15], fov: 55 }} >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <FBXModel position={[0, 0, 0]} rotation={rotation} />
        <OrbitControls />
        {/* <ambientLight />
        <Model /> */}
      </Canvas>
    </FbxStyle>
  );
};

export default Fbx;
