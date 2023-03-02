// 애니메이션(animation)

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Cube = () => {
  const mesh = useRef<any>();

  useFrame((_, delta) => {
    // 회전
    mesh.current.rotation.x += 0.5 * delta;
    mesh.current.rotation.y += 0.5 * delta;
  });

  return (
    <mesh ref={mesh}>
      <directionalLight args={['0xffffff', 1]} position={[1, 1, 2]} />
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="crimson" />
    </mesh>
  );
};

const Step04 = () => {
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
      <Cube />
    </Canvas>
  );
};

export default Step04;
