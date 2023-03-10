// MeshBasicMaterial
// 매우 기본적인 재질로, 객체의 색상을 단일 색상 또는 텍스처로 지정할 수 있다.
// 그러나 광택이나 반사, 그림자 등의 효과는 적용되지 않는다.
// 객체를 단순히 색칠하는 데 사용된다.

import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Step01 = () => {
  return (
    <>
      <Canvas>
        <>
          <PerspectiveCamera position={[0, 0, 0]} fov={75} near={0.1} far={100}>
            <mesh>
              {/* MeshBasicMaterial은 조명이 필요 없다 */}
              <boxGeometry args={[1, 1, 1]} />
              <meshBasicMaterial color="orange" />
            </mesh>
          </PerspectiveCamera>
          <OrbitControls />
        </>
      </Canvas>
    </>
  );
};

export default Step01;
