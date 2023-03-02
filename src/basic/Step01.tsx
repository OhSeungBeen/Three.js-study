// 기본 장면 만들기
// Renderer
// Scene, Camera 객체 데이터를 받아서 화면 안(canvas)에 이미지를 렌더링 해준다.

// Scene
// 3D Object가 존재하는 공간

// Camera
// Scene에 담긴 3D 공간을 카메라로 비춰서 화면을 담는다.
// 시야각(fov),카메라 시작(near)과 끝(far) 지점,위치등을 조절할 수 있다.

// Mesh
// 3D Object ( geometry + material + (texture))
// Geometry
// 도형, 3D Object의 뼈대
// Material
// 재질(소재), 생삭이나 광택등
// Texture
// mesh를 둘러싸는 껍데기, 이미지파일등

import { Canvas } from '@react-three/fiber';

const Step01 = () => {
  return (
    // renderer, scene
    <Canvas
      // perspective camera
      camera={{
        fov: 75, // 시야각(field of view)
        near: 0.1, // 카메라 시작 지점
        far: 1000, // 카메라 끝 지점
        position: [1, 1, 3], // 카메라 위치
        aspect: window.innerWidth / window.innerHeight, // 종횡비
      }}
    >
      {/* mesh */}
      <mesh>
        {/* box geometry */}
        <boxGeometry args={[1, 1, 1]} />
        {/* basic material */}
        <meshBasicMaterial color="crimson" />
      </mesh>
    </Canvas>
  );
};

export default Step01;
