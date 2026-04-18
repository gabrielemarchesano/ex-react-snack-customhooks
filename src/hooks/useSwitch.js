import { useState } from "react";

export default function useSwitch(){
  const [ isOn, setIsOn ] = useState(false);

  const toggle = () => {
    isOn ? setIsOn(false) : setIsOn(true)
  }

  return [ isOn, toggle ]
}
