function FoodInput({HaldleOnKeyDown}){

   
    return(
        <>
        <input type="text" className="form-control form-control-lg" id="foodinput" placeholder="Enter Your Food Name" onKeyDown={HaldleOnKeyDown} />

        </>
    )
}


export default FoodInput;