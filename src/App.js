
import './App.css';
import Header from './components/header.js'
import './components/header.css'
import Card from './components/card.js'
import './components/card.css'

function App() {
  return (
   <div className='container'>
      <Header/>
      <Card/>
      <p style={{textAlign:"center",padding:"0.8% 0%"}}>
        images from <span style={{color:"red"}}>Freebik</span>
      </p>
   </div>
  )
}

export default App;
