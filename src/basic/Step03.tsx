// 빛(조명, Light)

import { Canvas } from '@react-three/fiber';

const Step03 = () => {
  return (
    <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 1000,
        position: [3, 2, 3],
        aspect: window.innerWidth / window.innerHeight,
      }}
    >
      <mesh>
        {/* directional light */}
        <directionalLight args={['0xffffff', 1]} position={[1, 1, 2]} />
        <boxGeometry args={[1, 1, 1]} />
        {/* basic material은 빛에 반응을 하지않는다. */}
        {/* <meshBasicMaterial color="crimson" /> */}
        <meshStandardMaterial color="crimson" />
      </mesh>
    </Canvas>
  );
};

export default Step03;
