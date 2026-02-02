import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

export default function ParticlesBG() {
  const points = random.inSphere(new Float32Array(4000), { radius: 1.5 });

  return (
    <Canvas className="fixed inset-0 -z-10">
      <Points positions={points} stride={3}>
        <PointMaterial
          transparent
          size={0.003}
          color="#6366f1"
          depthWrite={false}
        />
      </Points>
    </Canvas>
  );
}
