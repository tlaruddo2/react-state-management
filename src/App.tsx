import './App.css';
import { useState } from 'react';
import { UseStatePage } from './page/use-state';
function App() {
  const [ clickedPage, setClickedPage ] = useState("");
  return (
    <div className="App">
      {clickedPage === "" && (
        <button onClick={()=>setClickedPage("useState")}>go to useState</button>
      )}
    
      {clickedPage === "useState" && <UseStatePage/>}
    </div>
  );
}

export default App;
