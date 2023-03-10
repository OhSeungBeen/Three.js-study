// MeshToonMaterial
// Toon shading(툰 셰이딩)을 구현하기 위해 사용되는 Material의 일종이다.
// Toon shading은 색상이나 밝기가 급격하게 바뀌는 곳에 경계선을 그리거나, 그림자를 구분하기 위해 사용되는 기법입니다.

import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useMemo } from 'react';

const Step06 = () => {
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

  const gradient = useLoader(
    TextureLoader,
    '/textures/gradient.png',
    (loader) => {
      loader.manager.onStart = onStart;
      loader.manager.onProgress = onProgress;
      loader.manager.onLoad = onLoad;
      loader.manager.onError = onError;
    }
  );

  const transFormedGradient = useMemo(() => {
    gradient.magFilter = THREE.NearestFilter;
    return gradient;
  }, [gradient]);

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
              <meshToonMaterial gradientMap={transFormedGradient} />
            </mesh>
          </PerspectiveCamera>
          <OrbitControls />
        </>
      </Canvas>
    </>
  );
};

export default Step06;
