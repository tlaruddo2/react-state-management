import './App.css';
import { useState } from 'react';
import { UseStatePage } from './page/use-state-page';
import { UseReducePage } from './page/use-reduce-page';
import { UseMeMoPage } from './page/use-memo-page';

function App() {
  const [ clickedPage, setClickedPage ] = useState("");
  return (
    <div className="App">
      {clickedPage === "" && <button onClick={()=>setClickedPage("useState")}>go to useState</button>}
      {clickedPage === "" && <button onClick={()=>setClickedPage("useReduce")}>go to useReduce</button>}
      {clickedPage === "" && <button onClick={()=>setClickedPage("useMeme")}>go to useMeme</button>}
    
      {clickedPage === "useState" && <UseStatePage/>}
      {clickedPage === "useReduce" && <UseReducePage/>}
      {clickedPage === "useMeme" && <UseMeMoPage/>}

    </div>
  );
}

export default App;
