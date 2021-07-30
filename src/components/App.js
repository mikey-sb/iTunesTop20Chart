import { useState, useEffect } from 'react'
import TuneBox from '../containers/TuneBox';


function App() {

  const [tuneInfo, setTuneInfo] = useState(null);

  const getTune = () => {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
      .then(res => res.json())
      .then(data => setTuneInfo(data))
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getTune()
  }, []) 

  console?.log(tuneInfo)


  return (
    <>
      {tuneInfo != null ? <TuneBox tuneInfo={tuneInfo}/> : null }
    </>

  );
}

export default App;
