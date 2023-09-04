import "./styles.css";
import {useState} from 'react';
const countries=[{name:'India',value:'IN',citites:['Delhi','Mumbai']},
{name:'Pakistan',value:'PK',citites:['Lahore','Karachi']},
{name:'America',value:'USA',citites:['San Fransisco','Aligranda']}];


export default function App() {
  const [country,setCountry]=useState({name:"",value:"",cities:[]});

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <select value={country} onChange={(e)=>setCountry(e.target.value)}>
        {countries && countries.map((item,idx)=>{
          return <option value={item.value}>{item.name}</option>
        })}

      </select>
    </div>
      ) ;
}
