// AxesHelper, GridHelper
// Three.js에서 제공하는 헬퍼 클래스이다.
// 시각적인 도움을 제공하여 렌더링되는 객체들 위치, 크기, 회전, 축등을 확인하는데 사용한다.
// AxesHelper 클래스는 X, Y, Z축에 대한 선과 라벨을 렌더링하는데 사용된다.
// GridHelper 클래스는 격자 모양을 만들어주는데 사용된다.

import { Canvas } from '@react-three/fiber';

const Step05 = () => {
  return (
    <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 1000,
        position: [3, 2, 3],
        aspect: window.innerWidth / window.innerHeight,
      }}
    >
      <>
        <mesh>
          <directionalLight args={['0xffffff', 1]} position={[1, 1, 2]} />
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="crimson" />
        </mesh>
        <axesHelper args={[5]} />
        {/* size, divisions, color */}
        <gridHelper args={[4, 5, 0xff0000, 'red']} />
      </>
    </Canvas>
  );
};

export default Step05;
