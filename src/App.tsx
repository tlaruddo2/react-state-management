import './App.css';
import { useState } from 'react';
import { UseStatePage } from './page/use-state-page';
import { UseReducePage } from './page/use-reduce-page';
import { UseMeMoPage } from './page/use-memo-page';
import { UseCallbackPage } from './page/use-callback-page';
import { UseEffectPage } from './page/use-effect-page';
import { UseRefPage } from './page/use-ref-page';

function App() {
  const [ clickedPage, setClickedPage ] = useState("");
  return (
    <div className="App">
      {clickedPage === "" && <button onClick={()=>setClickedPage("useState")}>go to useState</button>}
      {clickedPage === "" && <button onClick={()=>setClickedPage("useReduce")}>go to useReduce</button>}
      {clickedPage === "" && <button onClick={()=>setClickedPage("useMeme")}>go to useMeme</button>}
      {clickedPage === "" && <button onClick={()=>setClickedPage("useCallback")}>go to useCallback</button>}
      {clickedPage === "" && <button onClick={()=>setClickedPage("useEffect")}>go to useEffect</button>}
      {clickedPage === "" && <button onClick={()=>setClickedPage("useRef")}>go to useRef</button>}

    
      {clickedPage === "useState" && <UseStatePage/>}
      {clickedPage === "useReduce" && <UseReducePage/>}
      {clickedPage === "useMeme" && <UseMeMoPage/>}
      {clickedPage === "useCallback" && <UseCallbackPage/>}
      {clickedPage === "useEffect" && <UseEffectPage/>}
      {clickedPage === "useRef" && <UseRefPage/>}

      

    </div>
  );
}

export default App;
