// EnvironmentMap
// 장면의 배경에 반영되는 텍스처이다.
// 이를 사용하여 장면에서 반사되는 빛을 더욱 자연스럽게 표현할 수 있다.
// EnvironmentMap을 사용하려면 CubeTexture을 생성해야한다.
// CubeTexture은 큐브맵의 6개의 이미지로 구성된 텍스처이다.
// 각각의 이미지는 큐브의 면에 해당하며, 큐브맵의 세계 좌표계를 정의한다.

import {
  OrbitControls,
  PerspectiveCamera,
  useCubeTexture,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Step09 = () => {
  const cubeTexture = useCubeTexture(
    ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'],
    {
      path: '/textures/cubemap/',
    }
  );

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
              <boxGeometry args={[3, 3, 3]} />
              {/* <meshStandardMaterial
                envMap={cubeTexture}
                roughness={0.1}
                metalness={1}
              /> */}
              <meshBasicMaterial envMap={cubeTexture} />
            </mesh>
          </PerspectiveCamera>
          <OrbitControls />
        </>
      </Canvas>
    </>
  );
};

export default Step09;
