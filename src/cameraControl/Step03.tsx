// FlyControls
// FlyControls는 OrbitControls나 TrackballControls와 달리,
// 사용자가 카메라를 이동시키는 데 있어서 보다 자유로운 움직임을 제공한다.
// 사용자가 WASD 키를 사용하여 앞으로, 뒤로, 왼쪽으로, 오른쪽으로 이동할 수 있으며,
// 마우스를 사용하여 위로, 아래로 이동할 수 있다.
// 또한, 마우스 왼쪽 버튼을 누르고 움직이면 카메라가 회전한다.

import * as THREE from 'three';
import { FlyControls, PerspectiveCamera } from '@react-three/drei';
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

const Step03 = () => {
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
          {/* FlyControls */}
          <FlyControls
            rollSpeed={1}
            movementSpeed={3}
            // dragToLook={true}
          />
        </>
      </Canvas>
    </>
  );
};

export default Step03;
