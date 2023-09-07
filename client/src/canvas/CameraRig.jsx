import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  // to get the Delta useFrame This allow to executed code on every rendered frame
  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;
    // set the model rotation smoothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
