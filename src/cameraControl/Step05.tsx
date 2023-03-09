// PointerLockControls
// 사용자가 마우스 커서를 고정시켜서 마우스 움직임에 따라 카메라가 움직이도록 구현된다.
// 사용자가 마우스를 움직이면 카메라가 회전하고, W,A,S,D 키를 사용하여 이동할 수 있다.

import * as THREE from 'three';
import { PerspectiveCamera, PointerLockControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import '../../node_modules/react-dat-gui/dist/index.css';

interface CubeProps {
  color: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
}

const Cube = ({ color, position }: CubeProps) => {
  return (
    <mesh position={[position.x, position.y, position.z]}>
      <ambientLight args={['white', 0.5]} />
      <directionalLight args={['white', 1]} position={[1, 0, 2]} />
      <boxGeometry args={[1, 1, 1, 16, 16, 16]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Step05 = () => {
  const onLock = () => {
    console.log('lock!!');
  };

  const onUnlock = () => {
    console.log('unlock!!');
  };

  return (
    <>
      <Canvas>
        <>
          <PerspectiveCamera
            position={[0, 0, 1]}
            fov={75}
            near={0.1}
            far={1000}
            aspect={window.innerWidth / window.innerHeight}
          >
            {Array.from({ length: 20 }, () => ({
              color: `rgb(
                  ${50 + Math.floor(Math.random() * 50)},
                  ${50 + Math.floor(Math.random() * 50)},
                  ${50 + Math.floor(Math.random() * 50)}
                )`,
              position: {
                x: (Math.random() - 0.5) * 5,
                y: (Math.random() - 0.5) * 5,
                z: (Math.random() - 0.5) * 5,
              },
            })).map((cube, index) => (
              <Cube key={index} color={cube.color} position={cube.position} />
            ))}
          </PerspectiveCamera>
          {/* PointerLockControls */}
          <PointerLockControls onLock={onLock} onUnlock={onUnlock} />
        </>
      </Canvas>
    </>
  );
};

export default Step05;
