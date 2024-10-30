
import './App.css'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
    <Navbar></Navbar>
    {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-3xl'>Use React</h1>
      <PriceOptions></PriceOptions>
    
    </>
  )
}

export default App
