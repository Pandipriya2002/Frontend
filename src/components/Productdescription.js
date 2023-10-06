import * as React from "react";

import { useState, useEffect } from "react";

import { products} from "../components/Data";

import "./Productdescription.css";

import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";

import Modal from "@mui/material/Modal";
import axios from "axios";

const ProductDescription = () => {
  // const [orderid,setOrderid]=useState("");
  // const [orderdate,setOrderdate]=useState("")
  // const [orderstatus,setOrderstatus]=useState("")
  // const [time,setTime]=useState("")
  // const [tatoalamt,setTotalamt]=useState("")
  // const [pid, setPid] = useState("");
  // const [custid,setCustid]=useState("")
  const [toggleState, setToggleState] = useState({});

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const toggleTab = (id) => {
    setToggleState(id);

    handleOpen();
  };

  // const handle = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     order_id: orderid,
  //     order_date: orderdate,
  //     order_status:orderstatus,
  //     time_period:time,
  //     total_amount:tatoalamt,
  //     product_id:pid,
  //     customer_id: custid,

  //   };
  //   console.log(data);

  //   axios.post("http://localhost:8080/AddOrder", data)
  //     .then((response) => {
  //       console.log("success");
  //     })
  //     .catch((error) => {
  //       console.log("érror");
  //     });
  //   };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getAllProduct")
      .then((res) => res.json())

      .then((result) => setProducts(result))

      .catch((err) => console.log(err));
  }, []);

  const refreshData = () => {
    axios
      .post("http://localhost:8080/AddOrder")
      .then((e) => e.json())

      .then((e) => {
        console.log(e);

        // setResult(e);
      });
  };
  const style = {
    position: "absolute",

    top: "50%",

    left: "50%",

    transform: "translate(-50%, -50%)",

    width: 400,

    bgcolor: "background.paper",

    border: "2px solid #000",

    boxShadow: 24,

    p: 4,
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="imgBox">
            <img
              src={toggleState.product_image}
              alt={toggleState.title}
              className="mouse"
            />
          </div>

          {/* <Typography id="modal-modal-title" variant="h6" component="h2">Product Image:
            {toggleState.product_image}
          </Typography> */}

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Product ID:
            {toggleState.product_id}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Product Name:
            {toggleState.product_name}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Product Category:
            {toggleState.product_category}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Rent Amount :{toggleState.rent_amount}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Deposit Amount :{toggleState.deposit_amount}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Product Description :{toggleState.product_description}
          </Typography>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">Customer ID :
            {toggleState.customer_id}
          </Typography> */}
          <a href="/Payment">
            <Button variant="contained" onClick={refreshData}>
              Buy Now
            </Button>
          </a>
        </Box>
      </Modal>

      <div className="container-1">
        {products.map((product) => (
          <div className="card product" key={product.product_id}>
            <div className="imgBox">
              <img
                src={`data:image/jpeg;base64,${product.base64Image}`}
                alt={product.product_image}
                className="mouse"
              />
            </div>

            <div className="contentBox">
              <h3>Name : {product.product_name}</h3>
              {/* <h2 className="product-cat">{product.product_category}</h2> */}
              {/* <p className="product-price">Price: Rs.{product.prod_price}</p> */}

              {/* <p className="product-description">
                {product.product_description}
              </p> */}

              <p className="price-rent">Rent:{product.rent_amount}</p>
              <p className="price-ava">{product.available_products}</p>
              {/* <p className="price-deposit">{product.deposit_amount}</p> */}

              <button
                className="services__button"
                onClick={() => toggleTab(product)}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDescription;
