import './App.css';
import Menu from './components/Menu';
import image from './assets/image.WEBP.jpeg'

function App() {
  return (
    <div className="App" style={{ height: '100vh', backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
      <div className='bg-color'>
        <Menu />
      </div>
    </div>
  );
}

export default App;
