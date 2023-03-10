// MeshMatcapMaterial
// 주어진 이미지 파일을 사용하여 물체의 표면을 렌더링하는 Material의 일종이다.
// 이 Material을 사용하면 물체의 표면이 이미지 파일의 색상과 광택을 반영하게 된다.
// MeshBasicMaterial과 비슷한 속성을 가지고 있습니다.

import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Step08 = () => {
  const onStart = () => {
    console.log('로드 시작');
  };
  const onProgress = (url: string) => {
    console.log(url);
  };
  const onLoad = () => {
    console.log('로드 완료');
  };
  const onError = () => {
    console.log('에러');
  };

  const texture = useLoader(
    TextureLoader,
    '/textures/matcap/Copper_1.png',
    (loader) => {
      loader.manager.onStart = onStart;
      loader.manager.onProgress = onProgress;
      loader.manager.onLoad = onLoad;
      loader.manager.onError = onError;
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
              <coneGeometry args={[1, 2, 128]} />
              <meshMatcapMaterial matcap={texture} />
            </mesh>
          </PerspectiveCamera>
          <OrbitControls />
        </>
      </Canvas>
    </>
  );
};

export default Step08;
