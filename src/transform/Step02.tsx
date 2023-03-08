// group

import { PerspectiveCamera } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

import DatGui, { DatNumber } from 'react-dat-gui';
import '../../node_modules/react-dat-gui/dist/index.css';

const MeshGroup = () => {
  const group1 = useRef<any>();
  const group2 = useRef<any>();
  const group3 = useRef<any>();

  useFrame((_, delta) => {
    // 회전

    group1.current.add = group1.current.rotation.y += delta;
    group2.current.rotation.y += delta;
    group3.current.rotation.y += 0.5 * delta;
  });

  return (
    <group ref={group1}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="seagreen" />
      </mesh>
      <group ref={group2}>
        <mesh position={[2, 0, 0]} scale={[0.3, 0.3, 0.3]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="seagreen" />
        </mesh>
        <group ref={group3}>
          <mesh position={[2.5, 0, 0]} scale={[0.15, 0.15, 0.15]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="seagreen" />
          </mesh>
        </group>
      </group>
    </group>
  );
};

const Step02 = () => {
  const [guiValues, setGuiValues] = useState({
    cameraX: 0,
    cameraY: 0,
    cameraZ: 0,
  });

  return (
    <>
      <Canvas>
        <>
          <PerspectiveCamera
            position={[guiValues.cameraX, guiValues.cameraY, guiValues.cameraZ]}
            fov={75}
            near={0.1}
            far={1000}
            aspect={window.innerWidth / window.innerHeight}
          >
            <ambientLight args={['white', 0.5]} />
            <directionalLight args={['white', 1]} position={[1, 0, 2]} />
            <MeshGroup />
            <axesHelper args={[3]} />
          </PerspectiveCamera>
        </>
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
        <DatNumber
          label="카메라X"
          path="cameraX"
          min={-10}
          max={10}
          step={0.1}
        />
        <DatNumber
          label="카메라Y"
          path="cameraY"
          min={-10}
          max={10}
          step={0.1}
        />
        <DatNumber
          label="카메라Z"
          path="cameraZ"
          min={-10}
          max={10}
          step={0.1}
        />
      </DatGui>
    </>
  );
};

export default Step02;
