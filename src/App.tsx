import './App.css';
import { useState } from 'react';
import { UseStatePage } from './page/use-state-page';
import { UseReducePage } from './page/use-reduce-page';
import { UseMeMoPage } from './page/use-memo-page';
import { UseCallbackPage } from './page/use-callback-page';
import { UseEffectPage } from './page/use-effect-page';
import { UseRefPage } from './page/use-ref-page';
import { ContextCutomHooksPage1 } from './page/context-cutom-hooks1';
import { ContextCutomHooksPage2 } from './page/context-cutom-hooks2';
import { ContextCutomHooksPage3 } from './page/context-cutom-hooks3';
import { ContextCutomHooksSearch } from './page/context-cutom-hooks-search';

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
      {clickedPage === "" && <button onClick={()=>setClickedPage("context1")}>go to context1</button>}
      {clickedPage === "" && <button onClick={()=>setClickedPage("context2")}>go to context2</button>}
      {clickedPage === "" && <button onClick={()=>setClickedPage("context3")}>go to context3</button>}
      {clickedPage === "" && <button onClick={()=>setClickedPage("context4")}>go to context search</button>}


    
      {clickedPage === "useState" && <UseStatePage/>}
      {clickedPage === "useReduce" && <UseReducePage/>}
      {clickedPage === "useMeme" && <UseMeMoPage/>}
      {clickedPage === "useCallback" && <UseCallbackPage/>}
      {clickedPage === "useEffect" && <UseEffectPage/>}
      {clickedPage === "useRef" && <UseRefPage/>}
      {clickedPage === "context1" && <ContextCutomHooksPage1/>}
      {clickedPage === "context2" && <ContextCutomHooksPage2/>}
      {clickedPage === "context3" && <ContextCutomHooksPage3/>}
      {clickedPage === "context4" && <ContextCutomHooksSearch/>}
      

    </div>
  );
}

export default App;
