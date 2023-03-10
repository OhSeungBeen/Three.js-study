// MeshNormalMaterial
// 모든 정점의 법선 벡터를 사용하여 빛의 반사 방향과 색상을 계산하는 Material의 일종이다.
// 이를 통해 모델의 각 부분이 법선 벡터의 방향에 따라 다른 색상을 갖게 됩니다.

import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Step07 = () => {
  return (
    <>
      <Canvas>
        <>
          <PerspectiveCamera
            position={[0, 0, 0]}
            fov={75}
            near={0.1}
            far={1000}
          >
            <ambientLight args={['white', 0.5]} />
            <directionalLight args={['white', 1]} position={[1, 1, 2]} />
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[2, 2, 2]} />
              <meshNormalMaterial />
            </mesh>
          </PerspectiveCamera>
          <OrbitControls />
        </>
      </Canvas>
    </>
  );
};

export default Step07;
