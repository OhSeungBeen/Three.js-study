// Skybox
// 주변 환경을 렌더링하기 위해 사용됩니다. 즉, 3D 장면의 배경으로 사용된다.
// 일반적으로 큐브 맵(cubemap)을 사용하여 구현됩니다. 큐브 맵은 6개의 면으로 이루어진 박스 모양의 이미지 세트이며,
//  각 면은 다른 시점에서 촬영된 환경 이미지이다.

import {
  OrbitControls,
  PerspectiveCamera,
  useCubeTexture,
} from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { CubeTexture } from 'three';

const Scene = ({ cubeTexture }: { cubeTexture: CubeTexture }) => {
  const { scene } = useThree();

  useEffect(() => {
    scene.background = cubeTexture;
  }, [cubeTexture, scene]);

  return null;
};

const Step10 = () => {
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
          <Scene cubeTexture={cubeTexture} />
          <PerspectiveCamera
            position={[0, 0, 0]}
            fov={75}
            near={0.1}
            far={1000}
          >
            <ambientLight args={['white', 0.5]} />
            <directionalLight args={['white', 1]} position={[1, 1, 2]} />
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshBasicMaterial envMap={cubeTexture} />
            </mesh>
          </PerspectiveCamera>
          <OrbitControls />
        </>
      </Canvas>
    </>
  );
};

export default Step10;
