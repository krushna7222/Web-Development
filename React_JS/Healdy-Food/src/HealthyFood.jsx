import ListOfItem from "./listofitem";

function HealthyFood({fooditems}){

    return (
    <>
        {/* <h1 className='mb-4'>Healthy Food App</h1> */}
        <ul className="list-group">
       <ListOfItem hfooditems={fooditems}
       HandleOnClick={()=>console.log(fooditems + " being baught")
       }></ListOfItem>
        </ul>
    </>
    )
}

export default HealthyFood;