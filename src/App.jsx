import { useEffect, useState } from 'react'
import './App.css'
import {useDragonContext} from './utils/dragonContext'

// Reducer.jsx




const App = () => {

  const [dragonsData, setDragonsData] = useState(null);
  const [count, setCount] = useState(0);

  const [state, dispatch] = useDragonContext();


  useEffect(() => {
    console.log('effect');
    fetch('./dragons.json')
    .then(data => data.json())
    .then(data => {
      setDragonsData(data.dragons);
      dispatch({type: 'set_favorite', payload: data.dragons[0].name});
    })
    .catch(error => console.log("error : " + error));
  }, [count]);

  const handleChange = (e) => {
    // console.log(e.target.value);
    dispatch({type:'set_favorite', payload:e.target.value});
  }



  return (
    <>
      
      {dragonsData ? 
      <>
      <select name="" id="" onChange={handleChange}>
        {dragonsData.map((dragon, i) => <option key={i} value={dragon.name}>{dragon.name}</option>)}
      </select>
      <div>Dragons</div>
      <p>Mon dragon préféré est le... {state.favorite}</p>
      </>
      :
      <div>Chargement...</div> }
      <button onClick={() => setCount(count + 1)}>Reload</button>
      
    </>
  )
}

export default App
