// CanvasTexture
// 캔버스 요소를 사용하여 동적으로 생성된 텍스처를 만드는 방법이다.

import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

const Box = () => {
  const canvasRef = useRef(document.createElement('canvas'));
  const material = useRef<THREE.MeshBasicMaterial>(null);
  const clock = useMemo(() => new THREE.Clock(), []);

  const [context, setContext] = useState<CanvasRenderingContext2D | null>();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;

    setContext(canvas.getContext('2d'));
  }, []);

  useFrame((_, delta) => {
    if (!context || !material.current?.map) {
      return null;
    }

    const time = clock.getElapsedTime();

    material.current.map.needsUpdate = true;

    context.fillStyle = 'green';
    context.fillRect(0, 0, 500, 500);
    context.fillStyle = 'white';
    context.font = 'bold 50px sans-serif';
    context.fillText('오승빈', 200, 200);
    context.fillRect(time * 50, 100, 50, 50);
  });

  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial
        ref={material}
        map={new THREE.CanvasTexture(canvasRef.current)}
      />
    </mesh>
  );
};

const Step11 = () => {
  return (
    <>
      <Canvas>
        <>
          <PerspectiveCamera
            position={[0, 0, 0]}
            fov={75}
            near={0.1}
            far={1000}
          >
            <ambientLight args={['white', 0.5]} />
            <directionalLight args={['white', 1]} position={[1, 1, 2]} />
            <Box />
          </PerspectiveCamera>
          <OrbitControls />
        </>
      </Canvas>
    </>
  );
};

export default Step11;
