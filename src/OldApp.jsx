import Project1 from "./Firstproject/Project1"
import { useState,useEffect } from "react";

// import Gamelist from "./Firstproject/Gamelist";

function Counter(){
  const [count, setCount]= useState(0)
  const [nextVar,setNextVar]=useState(0)
  //  let count= 0;
  useEffect(()=>{
    console.log("counter mounted")
    setCount(count+3)
      },
      [nextVar])

    function trial(){
        setNextVar(nextVar+1)
        console.log(count)
      }
   function increase(){
    // count++
    setCount(count + 1)
    console.log(count)
   }
   function decrease(){
    setCount(count -1)
   }
   return <div>
    <h1>counter value:{count}</h1>
    <button onClick={increase}>click here to increase</button>
    <br />
    <button onClick={decrease}>click here to decrease</button>
    <br />
    <button onClick={trial}>trai to change count</button>

    {/* <button onClick={increase} onMouseEnter ={()=>{console.log("mouse entered")}}>increase</button> */}
   </div>
    
}
function MeroForm(){

const [FirstName,setFirstName]=useState("rajip")
const[premiumUser,setpremiumUser]= useState(true)
// if (premiumUser){
//   return <h2>if u are a premiumUser, then you are not  allowed to share your password to others</h2>
// }
// else{
//   return<h2>wait you are not the premium one</h2>
// }

  return(
    <div>
  <h1>this is my trail : {FirstName}</h1>
 {
  premiumUser?(<h1>you r premium</h1>):(<h1>you r not</h1>)
 }

<form>
  <label htmlFor="FirstName">Firstname</label>
<input value={FirstName} id="Firstname"  type ="text"onChange={(e)=>{console.log('changing input',e.target.value)
  setFirstName(e.target.value)


}} />
</form>
</div>
)
}
function Game(props){
  return(<div style={{
    padding:"10px",
    color:"green",
  background:"violet"}
  }>
    <h1>{props.title}</h1>
  </div>)
}


function Games(){
  const[trail,setTrail]=useState(["football","hockey"]);
  return(
  <div>
    <h1>this display games</h1>
    <ul>
      {/* {trail.map((trails)=>{return <li>{trails}</li>})} */}
      {trail.map((trials,index)=>{
        return <li key={index}>{trials}</li>
        // console.log(trial)
      })}
    </ul>
    {trail.map((game,index)=>{
      return <Game title = {game}/>
    })}
  </div>
  )
}

function App() {
  return (
    <div>
    <h1>welcome to the first project</h1>
    <br />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Aliquam est praesentium odio. 
      Placeat quidem numquam dicta quae mollitia deserunt repudiandae! 
      At doloremque fuga sit quibusdam incidunt quia aliquid quasi accusantium?
    
      </p>
      <Project1/>
     
      <Counter/>
     
      <MeroForm/>
      <Games/>
     
    </div>
    
  )
}

export default App
