// MeshStandardMaterial
// PBR(Physically Based Rendering) 방식으로 제작된 재질로, 빛의 산란, 반사, 굴절 등의 물리적 특성을 고려하여 물체의 외관을 시뮬레이션한다.
// 빛에 따른 그림자, 광택, 반사, 투명도 등의 효과를 제공하며, 표면의 거칠기, 금속성, 투명도 등의 속성을 조절할 수 있다.
// MeshPhongMaterial과 비교하여 계산 비용이 더 많이 들지만, 더욱 정확하고 자연스러운 렌더링 결과를 제공합니다.

import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Step03 = () => {
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
            <directionalLight args={['white', 1]} position={[1, 0, 2]} />

            <mesh position={[-1.5, 0, 0]}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshPhongMaterial
                color="orange"
                shininess={1000}
                // 각지게 표현하기
                // flatShading
              />
            </mesh>
            <mesh position={[1.5, 0, 0]}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshStandardMaterial
                color="orange"
                roughness={0.2}
                metalness={0.3}
                flatShading
              />
            </mesh>
            <mesh position={[1.5, 2, 0]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color="orange"
                roughness={0.2}
                metalness={0.3}
                // mesh를 구성하는 면에 대해 앞,뒤 어디에 렌더링 할지
                side={THREE.DoubleSide}
              />
            </mesh>
          </PerspectiveCamera>
          <OrbitControls />
        </>
      </Canvas>
    </>
  );
};

export default Step03;
