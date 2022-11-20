import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/Cart-slice";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import React, { useState } from "react";
import Button from '@mui/material/Button';
import "./Cart.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Cart = () => {
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  const dispatch = useDispatch();
  const [Warn, setWarn] = useState();
  const [state] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal } = state;


  const handleClose = () => {
    setWarn(false);
  };

  const showCart = () => {
    if (!loggedIn === false) {
      dispatch(cartActions.setShowCart());
    } else {
      setWarn(true);
    };
  };

  const quantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <>
      <Snackbar anchorOrigin={{ vertical, horizontal }} key={horizontal + vertical} open={Warn} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" >
          You have to login first to continue shopping
        </Alert>
      </Snackbar>
      {Warn && <>{Warn}</>}
      <div className="cartIcon">
      <Button variant="contained" style={{ background: '#8B8000' }} onClick={showCart}>Cart: {quantity} Items</Button>
      </div>
    </>
  );
};

export default Cart;
