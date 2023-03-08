// position, scale, rotation

import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';

import DatGui, { DatNumber } from 'react-dat-gui';
import '../../node_modules/react-dat-gui/dist/index.css';

const Step01 = () => {
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
            <mesh
              position={[0, 0, 0]}
              scale={[0.5, 1, 2]}
              rotation={[Math.PI * 0.25, Math.PI * 0.25, 0]}
            >
              <ambientLight args={['white', 0.5]} />
              <directionalLight args={['white', 1]} position={[1, 0, 2]} />
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="seagreen" />
            </mesh>
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

export default Step01;
