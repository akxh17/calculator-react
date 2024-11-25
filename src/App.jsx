import { useState ,useEffect} from "react";
import Data from "./Components/Data";
import Key from "./Components/Key";

function App() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState("0");

  useEffect(()=>{
    if(result==='0'){
      setEquation("")
    }else{
    setEquation(result);
    }
  },[result])

  function finalResult() {
    try {
      if (equation === "") {
        return;
      } else {
        setResult(String(eval(equation)));
      }
    } catch (error) {
      alert("Invalid Format");
    }
  }

  function display(value) {
    if (value === "AC") {
      setEquation("");
      setResult("0");
    } else if (value == "C") {
      setEquation((prevEquation)=>prevEquation.slice(0,prevEquation.length-1))
      
    } else if (value === "=") {
      finalResult();
    }else{
      if(/[0-9.]/.test(value) && equation===result){
        setEquation(value)
      }else{
      setEquation((prevEquation) => prevEquation + value);
      }
    }
    
  }
  return (
    <div className="main--container">
      <div className="display--container">
        <div className="equation--container">{equation}</div>
        <div className="result--container">{result}</div>
      </div>
      {Data.map((data) => (
        <Key
          key={data.id}
          value={data.value}
          id={data.id}
          handleClick={display}
        />
      ))}
    </div>
  );
}

export default App;
