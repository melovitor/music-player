import './App.css'
import { BigPlayer } from './components/BigPlayer'
import { LongPlayer } from './components/LongPlayer'
import { Player } from './components/Player'

function App() {
  return (
    <div className="App">
      <LongPlayer/>
      <div className='smallPlayers'>
        <BigPlayer/>
        <Player/>
      </div>
      
    </div>
  )
}

export default App
