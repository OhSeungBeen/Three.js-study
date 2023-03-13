// PointLight
// 모든 방향으로 광원이 발산하는 점광원(light source)이다.
// 점광원은 일반적으로 한 점을 중심으로 모든 방향으로 빛을 발산하며, 소스에서 멀어질수록 광도(intensity)가 감소한다.
// 이러한 특성 때문에 점광원은 빛의 위치와 거리에 따라 씬의 렌더링 결과물이 크게 영향을 받게 된다.

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

import { OrbitControls, useHelper } from '@react-three/drei';
import DatGui, { DatNumber } from 'react-dat-gui';
import { PointLightHelper } from 'three';

import * as THREE from 'three';

const Light = ({
  positionX,
  positionY,
  positionZ,
}: {
  positionX: number;
  positionY: number;
  positionZ: number;
}) => {
  const light = useRef<any>();
  useHelper(light, PointLightHelper, 3);

  const clock = new THREE.Clock();

  useFrame((_, delta) => {
    const time = clock.getElapsedTime();

    light.current.position.x = Math.cos(time) * 5;
    light.current.position.z = Math.sin(time) * 5;
  });

  return (
    <>
      <ambientLight args={['white', 0.5]} />
      <pointLight
        ref={light}
        args={['red', 1, 100, 2]}
        position={[positionX, positionY, positionZ]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadowCameraNear={1}
        shadowCameraFar={30}
        castShadow
      />
    </>
  );
};

const Step02 = () => {
  const [guiValues, setGuiValues] = useState({
    lightX: 0,
    lightY: 5,
    lightZ: 0,
  });

  return (
    <>
      <Canvas
        shadows="basic"
        camera={{
          position: [0, 3, 8],
          fov: 75,
          near: 0.1,
          far: 1000,
          aspect: window.innerWidth / window.innerHeight,
        }}
      >
        <Light
          positionX={guiValues.lightX}
          positionY={guiValues.lightY}
          positionZ={guiValues.lightZ}
        />
        <mesh
          position={[0, 0, 0]}
          rotation={[-Math.PI * 0.5, 0, 0]}
          castShadow
          receiveShadow
        >
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh position={[1, 1, 0]} castShadow receiveShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="royalblue" />
        </mesh>
        <mesh position={[-1, 1, 0]} castShadow receiveShadow>
          <sphereGeometry args={[0.7, 16, 16]} />
          <meshStandardMaterial color="gold" />
        </mesh>
        <OrbitControls />
        <axesHelper args={[5]} />
      </Canvas>
      <DatGui
        data={guiValues}
        onUpdate={(data) =>
          setGuiValues((prevState) => ({
            ...prevState,
            ...data,
          }))
        }
      >
        <DatNumber label="라이트X" path="lightX" min={-5} max={5} step={0.01} />
        <DatNumber label="라이트Y" path="lightY" min={-5} max={5} step={0.01} />
        <DatNumber label="라이트Z" path="lightZ" min={-5} max={5} step={0.01} />
      </DatGui>
    </>
  );
};

export default Step02;
