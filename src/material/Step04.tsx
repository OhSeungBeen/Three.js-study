// texture
// 이미지를 적용할 수 있도록 해준다.

import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useMemo } from 'react';

const Step04 = () => {
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

  const [brickBase, brickAmbient, brickNormal, birckRoughness, brickHeight] =
    useLoader(
      TextureLoader,
      [
        '/textures/brick/Brick_Wall_019_basecolor.jpg',
        '/textures/brick/Brick_Wall_019_ambientOcclusion.jpg',
        '/textures/brick/Brick_Wall_019_roughness.jpg',
        '/textures/brick/Brick_Wall_019_height.png',
      ],
      (loader) => {
        loader.manager.onStart = onStart;
        loader.manager.onProgress = onProgress;
        loader.manager.onLoad = onLoad;
        loader.manager.onError = onError;
      }
    );

  const skullBase = useLoader(
    TextureLoader,
    '/textures/skull/Ground Skull_basecolor.jpg'
  );

  const transformedSkullBase = useMemo(() => {
    skullBase.wrapS = THREE.RepeatWrapping; // 가로 반복
    skullBase.wrapT = THREE.RepeatWrapping; // 세로 반복
    skullBase.rotation = THREE.MathUtils.degToRad(60); // 회전
    skullBase.center.x = 0.5; // 센터 x값 변경
    skullBase.center.y = 0.5; // 센터 y값 변경

    return skullBase;
  }, [skullBase]);

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
            <mesh position={[-2, 0, 0]}>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial
                map={brickBase}
                // roughness={0.3}
                // metalness={0.3}
                // normalMap={brickNormal}
                // roughnessMap={birckRoughness}
                // aoMap={brickAmbient}
                // aoMapIntensity={5}
                // color="red"
              />
            </mesh>
            <mesh position={[2, 0, 0]}>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial map={transformedSkullBase} />
            </mesh>
          </PerspectiveCamera>
          <OrbitControls />
        </>
      </Canvas>
    </>
  );
};

export default Step04;
