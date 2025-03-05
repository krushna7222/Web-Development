
function Mycomponent(){
    let hfood=["Sprouts","Salad","Milk","Meat","Dal","Egg","Paneer","Oats"]
// let hfood=[]


// let msg=(hfood.length===0) ? <h2>No Food Item</h2>:null;  //using ternary operator if array is empty the print no food item
// return msg;

if (hfood.length ===0) {
    return(
        <h2>Your array is empty</h2>
    )
}
return (
    // (hfood.length===0) ? <h2>No Food Item</h2>:
  <>
    {/* {msg} */}
    <ul className="list-group">
      {hfood.map((item)=>(
        <li className="list-group-item">{item}</li>
      ))}
    </ul>
  </>
)
}

export default Mycomponent;