import Navbar from './components/Navbar'
import Place from './components/Place'
import data from './data'
import './App.css';

function App() {
  const placeData = data.map((place) => {
    return <Place 
            key={place.id}
            place={place}
            />
  })
  return (
    <div className='App'>
      <Navbar />
      {placeData}
    </div>
    
  );
}

export default App;
