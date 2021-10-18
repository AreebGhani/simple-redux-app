import "./App.css";

import { useSelector, useDispatch } from "react-redux";

import { Increment, Decrement } from "./Actions/index";

function App() {

  const ChangeState = useSelector( (state) => state.ChangeNumber );

  const dispatch = useDispatch();
  
  return (
  
    <>
      
      <h1 style={{color:"white"}}>Increment / Decrement Counter</h1>
      
      <br/>

      <h4 style={{color:"white"}}>Using React and Redux</h4>
      
      <br/><br/>

         <input name="quantity" type="text" className="input" value={ChangeState}/>

      <br/><br/>

      <div className="container">

          <a className="button" title="Decrement" onClick={ () => dispatch(Decrement(1)) } style={{marginRight:"20px"}}>
            
            <span> − </span>
            
          </a>

          <div></div>

          <a className="button" title="Increment" onClick={ () => dispatch(Increment(1)) } style={{marginLeft:"20px"}}>
            
            <span> + </span>
            
          </a>

      </div>
    
    </>
  
  );

}

export default App;