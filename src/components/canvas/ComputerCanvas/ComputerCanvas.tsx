import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../../Loader";
import { OrbitControls, Preload } from "@react-three/drei";
import Computers from "../Computers";

const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
