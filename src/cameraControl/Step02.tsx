// TrackballControls
// OrbitControls와 마찬가지로 사용자가 마우스나 터치를 사용하여 카메라를 움직일 수 있도록 지원한다.
// OrbitControls는 카메라가 중심점을 기준으로 회전하는 반면, TrackballControls는 사용자가 클릭한 지점을 중심으로 회전한다.
// 사용자가 마우스를 누르고 움직일 때, 해당 지점을 중심으로 카메라가 회전한다.

import * as THREE from 'three';
import { PerspectiveCamera, TrackballControls } from '@react-three/drei';
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

const Step02 = () => {
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
          {/* TrackballControls */}
          <TrackballControls maxDistance={20} minDistance={5} />
        </>
      </Canvas>
    </>
  );
};

export default Step02;
