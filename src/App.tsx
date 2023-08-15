import React from "react";
import { useHold } from "./pkg/index";

export default function App() {
  const [clicked, setClicked] = React.useState<boolean>(false);
  const [clicking, setClicking] = React.useState<boolean>(false);

  const events = useHold({
    onClick: () => {
      setClicked(true);
    },
    onHold: () => {
      setClicking(true);
    },
    onRelease: () => {
      setClicked(false);
      setClicking(false);
    },
    ms: 500
  });

  return (
    <>
      <button {...events} >Click and keep clicking</button>
      <p>Clicked: {clicked ? "Yes" : "No"}</p>
      <p>Clicking: {clicking ? "Yes" : "No"}</p>
    </>
  )
}
