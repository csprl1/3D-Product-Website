import CanvasModel from "./Canvas"
import {Customizer} from "./pages/Customizer"
import Home from "./pages/Home"






function App() {
  return (
    <>
      <main className="app transition-all ease-in">
        <Home/>

  
        <CanvasModel/> 
        <Customizer/>

        
       
     
        {/* <h1>Hello</h1> */}
       </main>
    </>
  )
}

export default App
