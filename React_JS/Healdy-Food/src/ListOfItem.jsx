import css from "./ListOfItem.module.css"
import { TiShoppingCart } from "react-icons/ti";


function ListOfItem({hfooditems,HandleOnClick}){

    function fooditem(item){
        alert(item+" Is bought");
        console.log(item+" Is bought");
        console.log(event);
        
        
    }

    return(
       
        hfooditems.map((item)=>(
            <li className={css["myfooditem"]}>{item}
          {/* <button type="button" className="btn btn-secondary" id="buybutton" onClick={HandleOnClick}>Buy</button> */}
          <button type="button" className="btn btn-primary" id="buybutton" onClick={(event)=>fooditem(item)}><TiShoppingCart /></button>
          </li>

          ))


    )
}

export default ListOfItem;