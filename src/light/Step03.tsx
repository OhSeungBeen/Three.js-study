// SpotLight
// 좁은 빔의 빛을 특정 지점에 집중시키는 조명이다.
// 특정 객체나 부분을 강조하고 강조하려는 영역을 명확하게 표시하는 데 사용될 수 있다.

import { Canvas } from '@react-three/fiber';
import { useRef, useState } from 'react';

import { OrbitControls, useHelper } from '@react-three/drei';
import DatGui, { DatNumber } from 'react-dat-gui';
import { SpotLightHelper } from 'three';

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
  useHelper(light, SpotLightHelper, 3);

  return (
    <>
      <ambientLight args={['white', 0.5]} />
      <spotLight
        ref={light}
        args={['white', 1, 30, Math.PI / 6]}
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

const Step03 = () => {
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

export default Step03;
