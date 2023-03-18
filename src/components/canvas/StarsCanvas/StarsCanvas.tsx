import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Stars from "../Stars/Stars";
import { Preload } from "@react-three/drei";

type Props = {};

const StarsCanvas = (props: Props) => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
