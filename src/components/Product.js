import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/Cart-slice";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import "./Product.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Product = ({ name, id, imgURL, price }) => {
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

  const addToCart = () => {
    if (!loggedIn === false) {
      setWarn(false);
      dispatch(
        cartActions.addToCart({
          name,
          id,
          price

        }))
    } else {
      setWarn(true);
    };
  }
  return (
    <>
      <Snackbar anchorOrigin={{ vertical, horizontal }} key={horizontal + vertical} open={Warn} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning" >
          You have to login first to continue shopping
        </Alert>
      </Snackbar>
      {Warn && <>{Warn}</>}
      <div className="card">
        <img src={imgURL} alt={name} />
        <h2>{name}</h2>
        <p>$ {price}</p>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </>
  );
};

export default Product;
