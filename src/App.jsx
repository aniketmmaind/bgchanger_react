import { useState } from "react"
import ButtonComponent from "./components/ButtonComponent"

function App() {
  const [color, setColor] = useState("olive")


  return (
    <div className="w-full  h-screen duration-200"
      style={{ backgroundColor: color }}  >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
          <ButtonComponent color="olive" setColor={() => setColor("olive")} colorNm="Olive" />
          <ButtonComponent color="red" setColor={() => setColor("red")} colorNm="Red" />
          <ButtonComponent color="green" setColor={() => setColor("green")} colorNm="Green" />
          <ButtonComponent color="blue" setColor={() => setColor("blue")} colorNm="Blue" />
          <ButtonComponent color="yellow" setColor={() => setColor("yellow")} colorNm="Yellow" />
        </div>
      </div>
    </div>
  )
}

export default App
