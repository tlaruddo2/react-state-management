import './App.css';
import { useState } from 'react';
import { UseStatePage } from './page/use-state-page';
import { UseReducePage } from './page/use-reduce-page';
function App() {
  const [ clickedPage, setClickedPage ] = useState("");
  return (
    <div className="App">
      {clickedPage === "" && <button onClick={()=>setClickedPage("useState")}>go to useState</button>}
      {clickedPage === "" && <button onClick={()=>setClickedPage("useReduce")}>go to useReduce</button>}
    
      {clickedPage === "useState" && <UseStatePage/>}
      {clickedPage === "useReduce" && <UseReducePage/>}

    </div>
  );
}

export default App;
