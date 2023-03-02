// Stats
// Three.js 렌더링에 대한 성능 모니터링을 위해 사용되는 라이브러리이다.
// 화면에 FPS(Frame Per Secound), 메모리 사용량, 렌더링 호출 횟수등 성능과 관련된 정보를 실시간으로 출력해준다.

// Dat GUI
// 사용자 인터페이스 생성 라이브러리
// UI 요소들의 값을 조작하면서 즉각적으로 웹 애플리케이션의 상태를 변경할 수 있다.

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

import { PerspectiveCamera, Stats } from '@react-three/drei';
import DatGui, { DatNumber } from 'react-dat-gui';

const Cube = ({ positionY }: { positionY: number }) => {
  const mesh = useRef<any>();

  useFrame((_, delta) => {
    mesh.current.rotation.y += 0.5 * delta;
  });

  return (
    <mesh ref={mesh} position={[0, positionY, 0]}>
      <ambientLight args={['white', 0.5]} />
      <directionalLight args={['white', 1]} position={[1, 0, 2]} />
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="crimson" />
    </mesh>
  );
};

const Step06 = () => {
  const [guiValues, setGuiValues] = useState({
    cubeY: 0,
    cameraX: 0,
  });

  return (
    <>
      <Canvas>
        <PerspectiveCamera
          position={[guiValues.cameraX, 0, 0]}
          fov={75}
          near={0.1}
          far={1000}
          aspect={window.innerWidth / window.innerHeight}
        >
          <Cube positionY={guiValues.cubeY} />
        </PerspectiveCamera>
        <Stats />
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
        <DatNumber label="큐브Y" path="cubeY" min={-5} max={5} step={0.01} />
        <DatNumber
          label="카메라X"
          path="cameraX"
          min={-10}
          max={10}
          step={0.01}
        />
      </DatGui>
    </>
  );
};

export default Step06;
