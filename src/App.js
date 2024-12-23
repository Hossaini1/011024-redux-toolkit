import Navbar from "./component/Navbar";
import CartContainer from "./component/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./component/Modal";



function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateTotals())
  },[cartItems])

  return (
    <main>
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;
