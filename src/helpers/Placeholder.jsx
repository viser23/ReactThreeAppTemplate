import { Box } from "@react-three/drei";
import { button, folder, useControls } from "leva";

export function Placeholder() {
    const [{ scale, color, wireframe, position }, set] = useControls(
      "Placeholder Box",
      () => ({
        transform: folder({
          scale: {
            value: 1,
            min: 0.4,
            max: 4,
            step: 0.2,
          },
          position: [0, 0, 0],
        }),
        material: folder({
          color: "#fff",
          wireframe: true,
        }),
        reset: button(() => {
          set({
            scale: 1,
            position: [0, 0, 0],
            color: "#fff",
            wireframe: true,
          });
        }),
      })
    );
  
    return (
      <Box scale={scale} position={position}>
        <meshStandardMaterial color={color} wireframe={wireframe} />
      </Box>
    );
  }