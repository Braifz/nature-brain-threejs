const Cube = () => {
  return (
    <mesh>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
};

export default Cube;
