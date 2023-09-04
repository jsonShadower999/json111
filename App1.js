import "./styles.css";
import {useState} from 'react';

export default function App() {
  const options=["cricket","football","basketball"];
  const days=["weekday","weekend"];
  const [game,setGame]=useState("");
  const [day,setDays]=useState("");
  

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <input type="radio" id="cricket" name="options"/>
      <label for="cricket" >cricket</label><br/> */}
       { options.map((option,index)=>{
         return (
            <>
           <input type="radio" id="{option}" name="options" value={option} onChange={(e)=>setGame(e.target.value)}/>
           <label for="option" >{option}</label>
           <br/>
           </>
         )
       })}
      <h1>select days </h1>
      { days.map((optiond,index)=>{
         return (
            <>
           <input type="radio" id="{optiond}" name="options" value={optiond} onChange={(e)=>setDays(e.target.value)}/>
           <label for="optiond" >{optiond}</label>
           <br/>
           </>
         )
       })}
      <h2>you will play</h2>
      <p>{game}</p>on <p>{day}</p>
    



      {/* {options && options.length>0 && options.map((op,idx)=>{
        return <input type="radio" name={op} />
      })} */}
      
      
    </div>
      ) ;
}
