function ToDoApp(){
    return (
        <div id="todoapp">
            <div class="container text-center">
                <div className="row rows">
                    <div className="col-5"><input type="text" placeholder="Enter the "/></div>
                    <div className="col-4"><input type="date" /></div>
                    <div className="col-3"><button class="btn btn-success">Add</button></div>
                </div>
                <div className="row rows">
                    <div className="col-5">Buy Milk</div>
                    <div className="col-4">04/10/2023</div>
                    <div className="col-3"><button class="btn btn-danger">Delete</button></div>
                </div>
                <div className="row rows">
                    <div className="col-5">Go To College</div>
                    <div className="col-4">04/10/2023</div>
                    <div className="col-3"><button class="btn btn-danger">Delete</button></div>
                </div>

            </div>
        </div>
    )

}
export default ToDoApp
