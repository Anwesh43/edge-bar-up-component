import logo from './logo.svg';
import './App.css';
import EdgeBarUp from './EdgeBarUp'
import {
    useAnimatedScale, 
    useDimension
} from './hooks'

function App() {
  const { scale, start} = useAnimatedScale(0.02, 20)
  const {w, h} = useDimension()
  return (
    <div className="App">
        <button onClick = {start}>start</button>
        <EdgeBarUp scale = {scale} w = {w} h = {h}/>
    </div>
  );
}

export default App;
