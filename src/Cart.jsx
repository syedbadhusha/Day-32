import CartPage from "./CartPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "./Reducer/Cartdatareducer";

function Cart() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app);

  const fetchData = async () => {
    try {
      const response = await fetch("product.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const contentType = response.headers.get("Content-Type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Response did not contain JSON data");
      }
      const data = await response.json();
      dispatch(fetchItems(data.products));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (data.cartData.length == 0) {
      fetchData();
    }
  }, []);
  return (
    <div>
      {" "}
      {data.cartData.map((product) => {
        return <CartPage key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Cart;
