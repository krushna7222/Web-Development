function ToDoTask2(){
    let todotask="Buy Milk"
    let tododate="04/10/2023"
    return (
        <div id="todoapp">
                
                 <div className="row rows">
                    <div className="col-5">{todotask}</div>
                    <div className="col-4">{tododate}</div>
                    <div className="col-3"><button class="btn btn-danger">Delete</button></div>
                </div>
               

        </div>
    )

}
export default ToDoTask2