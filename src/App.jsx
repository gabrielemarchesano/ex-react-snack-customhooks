import useDate from "./hooks/useDate";
import useSwitch from "./hooks/useSwitch";

function App() {

  const [ isOn, toggle ] = useSwitch();
  const currentDate = useDate();

  return (
    <div>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia stato</button>
      
      <h1>Data e ora attuali</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  )
}

export default App
