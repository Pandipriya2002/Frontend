import React, { useState } from "react";
import { useRef, useEffect } from "react";
 import "./Seller.css";
import Axios from "axios";
import { TextField } from "@mui/material";
import { File } from "@mui/material";
// import LockIcon from '@mui/icons-material/Lock';

const ProductId_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const ProductName_REGEX = /^[A-z][A-z0-9 _]{3,23}$/;
const Productcategory_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const Productdescription_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const Rentamount_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const Deposit_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const CustomerId_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const CustomerName_REGEX = /^[A-z][A-z0-9 _]{3,23}$/;
const MobileNo_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const CustomerAddress_REGEX =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Product_URL = "";
const Product = () => {
  const pidRef = useRef();
  const pnameRef = useRef();
  const pdescriptionRef = useRef();
  const pcategoryRef = useRef();
  const prentamountRef = useRef();
  const pdepositRef = useRef();
  const cidRef = useRef();
  const cnameRef = useRef();
  // const caddressRef = useRef();
  const cmobilenoRef = useRef();

  const errRef = useRef();
  var valid = true;

  const [pid, setPid] = useState("");
  const [validPid, setValidPid] = useState(false);
  const [pidFocus, setPidFocus] = useState(false);

  const [pname, setPname] = useState("");
  const [validPname, setValidPname] = useState(false);
  const [pnameFocus, setPnameFocus] = useState(false);

  const [pcategory, setPcategory] = useState("");
  const [validPcategory, setValidPcategory] = useState(false);
  const [pcategoryFocus, setPFocuscategory] = useState(false);

  const [pdescription, setPdescription] = useState("");
  const [validPdescription, setValidPdescription] = useState(false);
  const [pdescriptionFocus, setPFocusdescription] = useState(false);

  const [pRentamount, setPRentamount] = useState("");
  const [validPRentamount, setValidPRentamount] = useState(false);
  const [pRentamountFocus, setPFocusRentamount] = useState(false);

  const [pdeposit, setPdeposit] = useState("");
  const [validPdeposit, setValidPdeposit] = useState(false);
  const [pdepositFocus, setPFocusdeposit] = useState(false);

  const [cid, setCid] = useState("");
  const [validcid, setValidCid] = useState(false);
  const [cidFocus, setCidFocus] = useState(false);

  const [cname, setCname] = useState("");
  const [validCname, setValidcustomername] = useState(false);
  const [cnameFocus, setCnameFocus] = useState(false);

  const [cmobileno, setCmobileno] = useState("");
  const [validCmobileno, setValidCmobileno] = useState(false);
  const [cmobilenoFocus, setCmobilenoFocus] = useState(false);

  // const [caddress, setCaddress] = useState("");
  // const [validCaddress, setValidCaddress] = useState(false);
  // const [caddressFocus, setCaddressFocus] = useState(false);

  const [pimg, setPimg] = useState(null);

  const [errMsg, seterrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  useEffect(() => {}, []);

  useEffect(() => {
    setValidPid(ProductId_REGEX.test(pid));
  }, [pid]);

  useEffect(() => {
    setValidPname(ProductName_REGEX.test(pname));
  }, [pname]);

  useEffect(() => {
    setValidPdescription(Productdescription_REGEX.test(pdescription));
  }, [pdescription]);

  useEffect(() => {
    setValidPRentamount(Rentamount_REGEX.test(pRentamount));
  }, [pRentamount]);

  useEffect(() => {
    setValidPdeposit(Deposit_REGEX.test(pdeposit));
  }, [pdeposit]);

  useEffect(() => {
    setValidCid(CustomerId_REGEX.test(cid));
  }, [cid]);
  useEffect(() => {
    setValidcustomername(CustomerName_REGEX.test(cname));
  }, [cname]);

  useEffect(() => {
    setValidCmobileno(MobileNo_REGEX.test(cmobileno));
  }, [cmobileno]);
  
  useEffect(() => {
    seterrMsg("");
  }, [
    pid,
    pname,
    pcategory,
    pdescription,
    pRentamount,
    pdeposit,
    cid,
    cname,
    cmobileno,
    // caddress,
    pimg,
  ]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      // product_id: pid,
      product_name: pname,
      product_category: pcategory,
      product_description: pdescription,
      rent_amount: pRentamount,
      deposit_amount: pdeposit,
      customer_id: cid,
      customer_name: cname,
      mobile_no: cmobileno,
      // address: caddress,
      product_image: pimg,
    };
    console.log(data);

    Axios.post("http://localhost:8080/AddProduct", data)
      .then((response) => {
        console.log("success",response.data);
      })
      .catch((error) => {
        console.log("érror",);
      });
  };
  
  const handleImage = (event) => {
    const file = event.target.files[0];
    console.log(file)
    setPimg(file);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p></p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          {/* <h1 id="pd">Product</h1> */}
          <form onSubmit={handleSubmit}>
            <div class="container-21">
              <div className="pdetail">
                <TextField
                  id="standard-basic"
                  label="Product Name"
                  variant="standard"
                  ref={pnameRef}
                  autoComplete="off"
                  onChange={(e) => setPname(e.target.value)}
                  value={pname}
                  required
                  aria-invalid={validPname ? "false" : "true"}
                />
                <p
                  id="uidnote"
                  className={
                    pnameFocus && !validPname ? "instructions" : "offscreen"
                  }
                >
                  {" "}
                </p>
                <TextField
                  id="standard-basic"
                  label="Product Category"
                  variant="standard"
                  ref={pcategoryRef}
                  autoComplete="off"
                  onChange={(e) => setPcategory(e.target.value)}
                  value={pcategory}
                  required
                  aria-invalid={validPcategory ? "false" : "true"}
                />

                <p
                  id="uidnote"
                  className={
                    pcategoryFocus && !validPcategory
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  {" "}
                </p>

                <TextField
                  id="standard-basic"
                  label="Product Description"
                  variant="standard"
                  ref={pdescriptionRef}
                  autoComplete="off"
                  onChange={(e) => setPdescription(e.target.value)}
                  value={pdescription}
                  required
                  aria-invalid={validPdescription ? "false" : "true"}
                />

                <p
                  id="uidnote"
                  className={
                    pdescriptionFocus && !validPdescription
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  {" "}
                </p>

                <TextField
                  id="standard-basic"
                  label="Rent amount"
                  variant="standard"
                  ref={prentamountRef}
                  autoComplete="off"
                  onChange={(e) => setPRentamount(e.target.value)}
                  value={pRentamount}
                  required
                  aria-invalid={validPRentamount ? "false" : "true"}
                />

                <p
                  id="uidnote"
                  className={
                    pRentamountFocus && !validPRentamount
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  {" "}
                </p>
                <TextField
                  id="standard-basic"
                  label="Deposit amount"
                  variant="standard"
                  ref={prentamountRef}
                  autoComplete="off"
                  onChange={(e) => setPdeposit(e.target.value)}
                  value={pdeposit}
                  required
                  aria-invalid={validPdeposit ? "false" : "true"}
                />

                <p
                  id="uidnote"
                  className={
                    pdepositFocus && !validPdeposit
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  {" "}
                </p>
              </div>
              <div className="cdetail">
                <TextField
                  id="standard-basic"
                  label="Customer Id"
                  variant="standard"
                  ref={cidRef}
                  autoComplete="off"
                  onChange={(e) => setCid(e.target.value)}
                  value={cid}
                  required
                  aria-invalid={validcid ? "false" : "true"}
                />

                <p
                  id="uidnote"
                  className={
                    cidFocus && !validcid ? "instructions" : "offscreen"
                  }
                >
                  {" "}
                </p>

                <TextField
                  id="standard-basic"
                  label="Customer Name"
                  variant="standard"
                  ref={cnameRef}
                  autoComplete="off"
                  onChange={(e) => setCname(e.target.value)}
                  value={cname}
                  required
                  aria-invalid={validCname ? "false" : "true"}
                />

                <p
                  id="uidnote"
                  className={
                    cnameFocus && !validCname ? "instructions" : "offscreen"
                  }
                >
                  {" "}
                </p>

                <TextField
                  id="standard-basic"
                  label="Mobile no"
                  variant="standard"
                  ref={cmobilenoRef}
                  autoComplete="off"
                  onChange={(e) => setCmobileno(e.target.value)}
                  value={cmobileno}
                  required
                  aria-invalid={validCmobileno ? "false" : "true"}
                />

                <p
                  id="uidnote"
                  className={
                    cmobilenoFocus && !validCmobileno
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  {" "}
                </p>

                {/* <TextField
                  id="standard-basic"
                  label="Customer Address"
                  variant="standard"
                  ref={caddressRef}
                  autoComplete="off"
                  onChange={(e) => setCaddressFocus(e.target.value)}
                  value={caddress}
                  required
                  aria-invalid={validCaddress ? "false" : "true"}
                />

                <p
                  id="uidnote"
                  className={
                    caddressFocus && !validCaddress
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  {" "}
                </p> */}
                <label for="myfile">Select a file:</label>

                <input
                  type="file"
                  accept="image/*"
                  id="myfile"
                  name="myfile"
                  // value={pimg}
                  onChange={handleImage}
                />

                <p id="result "> </p>
              </div>
              <button className="sell-btn" onClick={handleSubmit}>
                SUBMIT
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default Product;
