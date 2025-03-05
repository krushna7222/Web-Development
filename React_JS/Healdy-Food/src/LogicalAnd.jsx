
function LogicalAnd(){
    let hfood=["Sprouts","Salad","Milk","Meat","Dal","Egg","Paneer","Oats"]
    // let hfood=[]


    return (
    <>
        <h1 className='mb-4'>Healthy Food App</h1>
        {hfood.length===0 && <h2>Food Item Is Empty</h2>}  //food item is empty then print food item is empty
        <ul class="list-group">
        {hfood.map((item)=>(
            <li className="list-group-item">{item}</li>
        ))}
        </ul>
    </>
    )
}

export default LogicalAnd;