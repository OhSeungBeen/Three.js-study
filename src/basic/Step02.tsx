// 직교 카메라(Orthographic Camera)
// 렌더링된 이미지에서 객체의 크기는 카메라와의 거리에 관계없이 일정하게 유지된다.
// 2D장면과 UI 요소를 렌더링하는데 유용하다.

import { Canvas, useFrame } from '@react-three/fiber';

const Step02 = () => {
  return (
    <Canvas
      orthographic
      camera={{
        left: -(window.innerWidth / window.innerHeight),
        right: window.innerWidth / window.innerHeight,
        top: 1,
        bottom: -1,
        near: 0.1,
        far: 1000,
        position: [1, 2, 5],
        zoom: 300,
      }}
    >
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="crimson" />
      </mesh>
    </Canvas>
  );
};

export default Step02;
