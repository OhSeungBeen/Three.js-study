// OrbitControls
// 사용자가 마우스나 터치를 사용하여 카메라를 회전, 확대 및 이동할 수 있다.
// 카메라의 중심점을 기준으로 회전하며, 마우스 움직임에 따라 카메라를 적절히 이동시켜준다.

import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
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

const Step01 = () => {
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
          {/* OrbitControls */}
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={50}
            enableDamping={true}
            maxDistance={10}
            minDistance={3}
            minPolarAngle={Math.PI / 4}
          />
        </>
      </Canvas>
    </>
  );
};

export default Step01;
