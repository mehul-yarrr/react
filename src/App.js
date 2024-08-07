import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import about from './components/about';

function App() {
  return (
    <>
      <Navbar title="NewText" AboutUs="AboutUs" />
      <div className="container"></div>
      <TextForm heading="Heading of Text Area" />
      
    </>
  );
}

export default App;
