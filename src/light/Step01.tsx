// DirectionalLight
// 직선광을 표현하는 데 사용하며 직선광은 모든 방향에서 같은 세기와 방향을 가지는 광원이다.

//DirectionalLightHelper
//DirectionalLight의 위치와 방향을 시각적으로 표현해주는 헬퍼 클래스이다.

// shadow 속성은 DirectionalLight, PointLight, SpotLight, Mesh 등의 객체에서 사용할 수 있으며,
// 그림자를 생성하려면 castShadow 속성을 true로 설정해야 한다. 또한, 그림자를 받으려면 receiveShadow 속성을 true로 설정해야한다.
// shadow 속성에는 shadow-mapSize-width, shadow-mapSize-height, shadowCameraNear, shadowCameraFar, shadowBias, shadowDarkness 등의 속성이 있다.
// shadow-mapSize-width와 shadow-mapSize-height 속성은 그림자 맵의 가로와 세로 크기를 설정한다.
// shadowCameraNear와 shadowCameraFar 속성은 그림자 맵을 생성할 카메라의 근접과 원격 평면을 설정한다.
// shadowBias 속성은 그림자 맵에서의 객체의 표면과 그림자 맵 사이의 간격을 조절하는 값이다.
// shadowDarkness 속성은 그림자의 어두운 정도를 설정한다.

import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

import { OrbitControls, useHelper } from '@react-three/drei';
import DatGui, { DatNumber } from 'react-dat-gui';
import { DirectionalLightHelper } from 'three';

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
  useHelper(light, DirectionalLightHelper, 3);

  useEffect(() => {}, []);

  const clock = new THREE.Clock();

  useFrame((_, delta) => {
    const time = clock.getElapsedTime();

    light.current.position.x = Math.cos(time) * 5;
    light.current.position.z = Math.sin(time) * 5;
  });

  return (
    <>
      <ambientLight args={['white', 0.5]} />
      <directionalLight
        ref={light}
        args={['red', 10]}
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

const Step01 = () => {
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

export default Step01;
