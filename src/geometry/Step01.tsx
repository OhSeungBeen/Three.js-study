// width, height, depth, segments

import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import '../../node_modules/react-dat-gui/dist/index.css';

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
            <mesh position={[0, 0, 0]}>
              <ambientLight args={['white', 0.5]} />
              <directionalLight args={['white', 1]} position={[1, 0, 2]} />
              {/* args - width, height, depth, segments  */}
              <boxGeometry args={[1, 1, 1, 16, 16, 16]} />
              <meshStandardMaterial
                color="seagreen"
                wireframe
                side={THREE.DoubleSide}
              />
            </mesh>
          </PerspectiveCamera>
          <OrbitControls />
        </>
      </Canvas>
    </>
  );
};

export default Step01;
