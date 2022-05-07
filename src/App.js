import './App.css';
import { useRef } from 'react';
import Brand from "./components/Brand.js";
import Us from "./components/Us.js";
import Contact from "./components/Contact.js";
import Content from "./components/Content.js";

function App() {

  const testRef = useRef(null);
  const scrollToElement = () => testRef.current.scrollIntoView();

  return (
    <div className="App">
      <Brand scroll={scrollToElement}/>
      <Us myRef={testRef}/>
      <Contact/>
    </div>
  );
}

export default App;
