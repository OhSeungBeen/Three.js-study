// RectAreaLight
// 사각형 모양으로 된 조명이다 반구 모양이나 점 모양 조명이 아니므로 특정 방향으로 빛을 발산하지 않고,
// 사각형 모양의 영역에 균일하게 빛을 발산한다. 이는 현실 세계의 창문이나 형광등과 같은 광원을 모방할 때 유용하다.

import { Canvas } from '@react-three/fiber';
import { useRef, useState } from 'react';

import { OrbitControls, useHelper } from '@react-three/drei';
import DatGui, { DatNumber } from 'react-dat-gui';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';

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
  useHelper(light, RectAreaLightHelper, 1);

  return (
    <>
      <rectAreaLight
        ref={light}
        args={['orange', 10, 2, 2]}
        position={[positionX, positionY, positionZ]}
      />
    </>
  );
};

const Step03 = () => {
  const [guiValues, setGuiValues] = useState({
    lightX: 0,
    lightY: 2,
    lightZ: 3,
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
