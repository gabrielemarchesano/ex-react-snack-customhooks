import useCustomPointer from "./hooks/useCustomPointer";
import useDate from "./hooks/useDate";
import useSwitch from "./hooks/useSwitch";

function App() {

  const [ isOn, toggle ] = useSwitch();
  const currentDate = useDate();
  const customPointer = useCustomPointer("🔥");

  return (
    <div>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia stato</button>
      
      <h1>Data e ora attuali</h1>
      <p>{currentDate.toLocaleString()}</p>

      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>
  )
}

export default App
