// HemisphereLight
// 반구 모양으로 된 조명이다. 대개 DirectionalLight와 함께 사용되며,
// 하늘, 지평선의 색상을 모방하거나 자연적인 조명을 구현하는 데 사용된다.

import { Canvas } from '@react-three/fiber';
import { useRef, useState } from 'react';

import { OrbitControls, useHelper } from '@react-three/drei';
import DatGui, { DatNumber } from 'react-dat-gui';
import { HemisphereLightHelper } from 'three';

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
  useHelper(light, HemisphereLightHelper, 1);

  return (
    <>
      <hemisphereLight
        ref={light}
        args={['pink', 'lime', 1]}
        position={[positionX, positionY, positionZ]}
      />
    </>
  );
};

const Step03 = () => {
  const [guiValues, setGuiValues] = useState({
    lightX: -5,
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
        <mesh position={[0, 0, 0]} rotation={[-Math.PI * 0.5, 0, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh position={[1, 1, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[-1, 1, 0]}>
          <sphereGeometry args={[0.7, 16, 16]} />
          <meshStandardMaterial color="white" />
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
