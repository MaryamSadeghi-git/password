import {useState} from 'react';
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { TiTickOutline } from "react-icons/ti";


import './App.css'
function App(){

  const [type , setType] = useState("password");
  const [lower , setLower] = useState(false);
  const [upper , setUpper] = useState(false);
  const [number , setNumber] = useState(false);
  const [special , setSpecial] = useState(false);
  const [length , setLength] = useState(false);

  const handlerchange =(value)=>{
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=. *[0-9])');
    const special = new RegExp('(?=.*[!@#$%^&*])');
    const length = new RegExp('(?=.{8,})');
    if(lower.test(value)){
      setLower(true);
    }
    else{
      setLower(false);
    }
    if(upper.test(value)){
      setUpper(true);
    }
    else{
      setUpper(false);
    }
    if(number.test(value)){
      setNumber(true);
    }
    else{
      setNumber(false);
    }
    if(special.test(value)){
      setSpecial(true);
    }
    else{
      setSpecial(false);
    }
    if(length.test(value)){
      setLength(true);
    }
    else{
      setLength(false);
    }
  }
  return(
    <div className='contain'>
      <div>
        <div>
          <input type={type} onChange={(e)=>handlerchange(e.target.value)}/>
          {type === "password" ? (
            <span onClick={()=>setType("text")}>
              <FaEyeSlash size={17}/>
            </span>
          ):(
            <span onClick={()=>setType("password")}>
             <IoEyeSharp size={17}/>

            </span>
          )}
        </div>
        <main className='mainContain'>
          <div className={lower? 'valiated' : 'notvaliate'}>
            {lower?(
              <span className='ticked'>
                <TiTick />
              </span>
            ):(
              <span className='not-ticked'>
                <TiTickOutline />
              </span>
            )}
            lowercase letter</div>
          <div className={upper? 'valiated' : 'notvaliate'}>
            {upper?(
              <span className='ticked'>
                <TiTick />
            </span>
          ):(
            <span className='not-ticked'>
              <TiTickOutline />
            </span>
          )}
            uppercase letter</div>
          <div className={number? 'valiated' : 'notvaliate'}>
            {number?(
              <span className='ticked'>
                <TiTick />
              </span>
            ):(
              <span className='not-ticked'>
                <TiTickOutline />
              </span>
            )}
            number</div>
          <div className={special? 'valiated' : 'notvaliate'}>
            {special?(
              <span className='ticked'>
                <TiTick />
              </span>
            ):(
              <span className='not-ticked'>
                <TiTickOutline />
              </span>
            )}
            special character</div>
          <div className={length? 'valiated' : 'notvaliate'}>
            {length?(
              <span className='ticked'>
                <TiTick />
              </span>
            ):(
              <span className='not-ticked'>
                <TiTickOutline />
              </span>
            )}
            8 characters</div>
        </main>
      </div>
    </div>
  )
}
export default App;