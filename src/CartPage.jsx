import { useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { removeItem } from "./Reducer/Cartdatareducer";

function CartPage({product}) {
  const data = useSelector((state) => state.app);
  const dispatch = useDispatch()

  const [qty,setQty]=useState(1);

  function changeQty(e){
    setQty(e.target.value)
  }
  return (
    <div className="col-md-12">
      <div className="card mb-3 p-3" style={{backgroundColor:"#f6f5f8"}}>
        <div className="row no-gutters">
          <div className="col-md-3">
            <img src={product.thumbnail} alt="..." style={{width:'200px'}}/>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <h6 className="card-title">Details & Care</h6>
              <p className="card-text">
                {product.description}              
              </p>
              <p className="card-text">
              </p>
            </div>
          </div>
          <div className="col-md-2">
                <div>
                    <label htmlFor="qty" >Qty : </label><input type="number" id="qty" value={qty} style={{width:"40px"}} min='1' onChange={(e)=>changeQty(e)}/>
                </div>
                <div style={{paddingTop:"50px"}}>
                    <button style={{color:"red"}} onClick={()=>{dispatch(removeItem(product.id))}}>REMOVE</button>
                </div>
            </div>
            <div className="col-md-1">
                <div>
                    <h6>{`$${product.price*qty}.00`}</h6>
                </div>
            </div>
        </div>
        <div className="row" style={{marginTop:"50px", paddingTop:"20px", borderTop:"2px solid gray"}}>
            <div className="col-md-11">SUBTOTAL </div>
            <div className="col-md-1">
                <div>
                    <h6>{`$${product.price*qty}.00`}</h6>
                </div>
            </div>
        </div>
        <div className="row" style={{paddingBottom:"20px", borderBottom:"2px solid gray"}}>
            <div className="col-md-11">SHIPPING </div>
            <div className="col-md-1">
                <div>
                    <h6>FREE</h6>
                </div>
            </div>
        </div>
        <div className="row no-gutters">
            <div className="col-md-11">TOTAL </div>
            <div className="col-md-1">
                <div>
                    <h6>{`$${product.price*qty}.00`}</h6>
                </div>
            </div>
        </div>
        <div className="row no-gutters">
            <p className="col-md-12" style={{textAlign:"right", color:"red"}}>Get Daily cash with nespola card </p>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
