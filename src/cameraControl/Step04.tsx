// FirstPersonControls
// FirstPersonControls는 FlyControls와 비슷한 기능을 제공하지만, 카메라 이동 방식이 약간 다르다.
// FirstPersonControls를 사용하면 사용자가 마우스를 사용하여 좌우로 회전하거나, 위아래로 이동할 수 있다.
// 또한, 키보드의 화살표나 WASD 키를 사용하여 앞뒤로 이동할 수 있습니다.

import * as THREE from 'three';
import { FirstPersonControls, PerspectiveCamera } from '@react-three/drei';
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

const Step04 = () => {
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
          {/* FirstPersonControls */}
          <FirstPersonControls
            // movementSpeed={10}
            lookSpeed={0.1}
            autoForward={true}
            // activeLook={false}
          />
        </>
      </Canvas>
    </>
  );
};

export default Step04;
