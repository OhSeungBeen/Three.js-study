// vertex

import * as THREE from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

import '../../node_modules/react-dat-gui/dist/index.css';
import { useEffect, useRef, useState } from 'react';

const Sphere = () => {
  const sphere = useRef<any>();
  const clock = new THREE.Clock();

  const [randomArray, setRandomArray] = useState<any>([]);

  useEffect(() => {
    const positionArray = sphere.current.attributes.position.array;
    let randomArray = [];
    for (let i = 0; i < positionArray.length; i += 3) {
      // 정점(Vertex) 한 개의 x, y, z 좌표를 랜덤으로 조정
      // positionArray[i] = positionArray[i] + (Math.random() - 0.5) * 0.2;
      positionArray[i] += (Math.random() - 0.5) * 0.2;
      positionArray[i + 1] += (Math.random() - 0.5) * 0.2;
      positionArray[i + 2] += (Math.random() - 0.5) * 0.2;

      randomArray[i] = (Math.random() - 0.5) * 0.2;
      randomArray[i + 1] = (Math.random() - 0.5) * 0.2;
      randomArray[i + 2] = (Math.random() - 0.5) * 0.2;
    }

    setRandomArray(randomArray);
  }, []);

  useFrame((_, delta) => {
    const positionArray = sphere.current.attributes.position.array;

    if (Array.isArray(randomArray) && randomArray.length === 0) {
      return;
    }

    const time = clock.getElapsedTime() * 3;

    for (let i = 0; i < positionArray.length; i += 3) {
      positionArray[i] += Math.sin(time + randomArray[i] * 100) * 0.001;
      positionArray[i + 1] += Math.sin(time + randomArray[i + 1] * 100) * 0.001;
      positionArray[i + 2] += Math.sin(time + randomArray[i + 2] * 100) * 0.001;
    }

    sphere.current.attributes.position.needsUpdate = true;
  });

  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[2, 64, 64]} ref={sphere} />
      <meshStandardMaterial
        color="seagreen"
        flatShading
        side={THREE.DoubleSide}
      />
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
            <ambientLight args={['white', 0.5]} />
            <directionalLight args={['white', 1]} position={[1, 0, 2]} />
            <Sphere />
          </PerspectiveCamera>
          <OrbitControls />
        </>
      </Canvas>
    </>
  );
};

export default Step02;
