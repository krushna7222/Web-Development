import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponent from './Mycomponent';
import LogicalAnd from './LogicalAnd';
import HealthyFood from './HealthyFood';
import ErrorMessage from './ErrorMessage';
import FoodInput from './FoodInput';
import FoodTitle from './FoodTitle';
import Container from './Container';

function App() {

  const [value, setvalue] = useState(["Sprouts","Salad","Milk"])

  // let hfood=["Sprouts","Salad","Milk","Meat","Dal","Egg","Paneer","Oats"]

  let finalfooditem

function textinput(event){
  if(event.key=="Enter"){
    let newfood=event.target.value;
    finalfooditem=[...value,newfood]
    setvalue(finalfooditem)
    event.target.value=""

  // console.log(event);
  }
  
}

 // let finalfooditem=[...hfood,value]


  // let hfood=[]
// if(hfood.length===0){
//   return (
//     <ErrorMessage></ErrorMessage>
//   );
// }
  return (
    // hfood.length===0 ? <ErrorMessage></ErrorMessage> :
   
    <Container>
      <FoodTitle></FoodTitle>
      <FoodInput HaldleOnKeyDown={textinput}></FoodInput>
      {/* <p>{value}</p> */}
      <HealthyFood fooditems={value}></HealthyFood>
    </Container>
  )
}

export default App
