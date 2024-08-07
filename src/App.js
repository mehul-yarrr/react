import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import about from './components/about';

function App() {
  return (
    <>
      <Navbar title="Jenni ki website!" AboutUs="AboutUs" />
      <div className="container"></div>
      <TextForm heading="Heading of Text Area" />
      
    </>
  );
}

export default App;
