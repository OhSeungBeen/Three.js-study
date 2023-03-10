// MeshLamberMaterial
// 빛에 따른 색상 변화를 적용하여 물체의 색상과 명암을 나타낸다.
//  빛에 따라 그림자가 만들어지며, 반사나 광택과 같은 효과는 적용되지 않는다.

// MeshPhongMaterial
// MeshPhongMaterial은 광택과 반사와 같은 빛의 다양한 효과를 적용할 수 있다.
// Ambient, Diffuse, Specular, Shininess 등의 속성을 조정하여 물체의 빛을 받는 모습을 정확하게 조정할 수 있다.

import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Step02 = () => {
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
            <directionalLight args={['white', 1]} position={[1, 0, 2]} />
            <mesh position={[-1.5, 0, 0]}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshLambertMaterial color="orange" />
            </mesh>
            <mesh position={[1.5, 0, 0]}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshPhongMaterial color="orange" shininess={1000} />
            </mesh>
          </PerspectiveCamera>
          <OrbitControls />
        </>
      </Canvas>
    </>
  );
};

export default Step02;
