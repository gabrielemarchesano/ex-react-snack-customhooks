import { useEffect, useState } from "react"

export default function useCustomPointer(component){

  const [ position, setPosition ] = useState({x: 0, y: 0});
  useEffect(() => {
    const mouse = event => {
      setPosition({x: event.clientX, y: event.clientY});
    }
    document.addEventListener("mousemove", mouse);
    return() => {
      document.removeEventListener("mousemove", mouse)
    }
  }, [])

  return(
    <div style={{
      position: "fixed",
      top: position.y,
      left: position.x,
      transform: "translate(-50%, -50%)",
      cursor: "none"
    }}>
      {component}
    </div>
  )
}