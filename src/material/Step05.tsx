// 여러가지 texture 적용하기

import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useMemo } from 'react';

const Step05 = () => {
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

  const textures = useLoader(
    TextureLoader,
    [
      '/textures/mcstyle/right.png',
      '/textures/mcstyle/left.png',
      '/textures/mcstyle/top.png',
      '/textures/mcstyle/bottom.png',
      '/textures/mcstyle/front.png',
      '/textures/mcstyle/back.png',
    ],
    (loader) => {
      loader.manager.onStart = onStart;
      loader.manager.onProgress = onProgress;
      loader.manager.onLoad = onLoad;
      loader.manager.onError = onError;
    }
  );

  const transformedTextures = useMemo(() => {
    // 가장가까운 픽셀을 고르게한다.
    textures.map((texture) => {
      texture.magFilter = THREE.NearestFilter;
    });

    return textures;
  }, [textures]);

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
              {transformedTextures.map((transformedTexture, index) => (
                <meshStandardMaterial
                  key={index}
                  attach={`material-${index}`}
                  map={transformedTexture}
                />
              ))}
            </mesh>
          </PerspectiveCamera>
          <OrbitControls />
        </>
      </Canvas>
    </>
  );
};

export default Step05;
