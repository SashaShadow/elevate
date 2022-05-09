import './App.css';
import { useRef } from 'react';
import Brand from "./components/Brand.js";
import Us from "./components/Us.js";
import Contact from "./components/Contact.js";
import MySlider from "./components/MySlider.js";

function App() {

  const testRef = useRef(null);
  const testRef2 = useRef(null);

  const scrollToElement = (someRef) => someRef.current.scrollIntoView({ 
    behavior: 'smooth' 
  });

  return (
    <div className="App">
      <Brand scroll={scrollToElement} ref1={testRef} ref2={testRef2}/>
      <Us myRef={testRef}/>
      <MySlider/>
      <Contact myRef={testRef2}/>
    </div>
  );
}

export default App;
