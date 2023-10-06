// import React, { useEffect, useState } from "react";

// import "./Order.css";

// import Stepper from "@mui/material/Stepper";

// import Step from "@mui/material/Step";

// import StepLabel from "@mui/material/StepLabel";

// // import product from './ProductDescription'

// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardFooter,
//   MDBCardHeader,
//   MDBCardImage,
//   MDBCol,
//   MDBContainer,
//   MDBIcon,
//   MDBRow,
//   MDBTypography,
// } from "mdb-react-ui-kit";

// import { Box, Modal, Typography } from "@mui/material";

// const steps = ["Placed", "Delivered"];

// export default function OrderPage(props) {
//   const [result, setResult] = useState([]);

//   // useEffect(() => {
//   //   refreshData();
//   // });

//   const refreshData = () => {
//     fetch("http://localhost:8080/getAllOrder")
//       .then((e) => e.json())

//       .then((e) => {
//         console.log(e);

//         setResult(e);
//       });
//   };

//   console.log(result);

//   function getDate() {
//     const today = new Date();

//     const month = today.getMonth() + 1;

//     const year = today.getFullYear();

//     const date = today.getDate();

//     return `${month}/${date}/${year}`;
//   }

//   const [Id, setId] = React.useState(10002);

//   const [currentDate, setCurrentDate] = React.useState(getDate());

//   const today = new Date();

//   React.useEffect(() => {
//     setId((prev) => prev + 1);
//   }, []);

//   const disp = result.map((r) => (
//     <MDBContainer className="py-1 h-100">
//       <MDBRow className="justify-content-center align-items-center h-100">
//         <MDBCol md="10" lg="8" xl="6">
//           <MDBCard
//             className="card-stepper"
//             style={{ borderRadius: "16px", width: "700px" }}
//           >
//             <MDBCardHeader className="p-4">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <p className="text-muted mb-2">
//                     {" "}
//                     Order ID :{" "}
//                     <span className="fw-bold text-body">{r.order_id}</span>
//                   </p>

//                   <p className="text-muted mb-0">
//                     {" "}
//                     Order Date :{" "}
//                     <span className="fw-bold text-body">
//                       {r.order_date.split("T")[0]}
//                     </span>{" "}
//                   </p>
//                 </div>

//                 <div>
//                   <MDBTypography tag="h6" className="mb-0 flex">
//                     {" "}
//                     {/* <a href="#" className="view">View Details</a>{" "} */}
//                   </MDBTypography>
//                 </div>
//               </div>
//             </MDBCardHeader>

//             <MDBCardBody className="p-4">
//               <div className="d-flex flex-row mb-4 pb-2">
//                 <div className="flex-fill">
//                   <MDBTypography tag="h5" className="bold">
//                     {}
//                   </MDBTypography>

//                   <p className="text-muted"> Qt: 1 item</p>

//                   <MDBTypography tag="h4" className="mb-3">
//                     <p className="small text-muted">
//                       Advance:
//                       <span> {}</span>
//                     </p>

//                     <p className="small text-muted">
//                       Rent:
//                       <span> {}</span>
//                     </p>

//                     <p className="small text-muted">
//                       Total:
//                       <span>
//                         {}
//                       </span>
//                     </p>
//                   </MDBTypography>
//                 </div>

//                 <div>
//                   <MDBCardImage
//                     fluid
//                     className="align-self-center"
//                     // src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp"

//                   //  src={}
//                     width="250"
//                   />
//                 </div>
//               </div>

//               {/* <ul

//               id="progressbar-1"

//               className="mx-0 mt-0 mb-5 px-0 pt-0 pb-4"

//             >

//               <li className="step0 active" id="step1">

//                 <span style={{ marginLeft: "22px", marginTop: "12px" }}>

//                   PLACED

//                 </span>

//               </li>

//               {/* <li className="step0 active text-center" id="step2">

//                 <span>SHIPPED</span>

//               </li> */}

//               {/* <li className="step0 text-muted text-end" id="step3">

//                 <span style={{ marginRight: "22px" }}>DELIVERED</span>

//               </li>

//             </ul> */}

//               <Box sx={{ width: "100%" }}>
//                 <Stepper activeStep={1} alternativeLabel>
//                   {steps.map((label) => (
//                     <Step key={label}>
//                       <StepLabel>{label}</StepLabel>
//                     </Step>
//                   ))}
//                 </Stepper>
//               </Box>
//             </MDBCardBody>

//             <MDBCardFooter className="p-4">
//               <div className="d-flex justify-content-between">
//                 <div className="border-start h-100"></div>

//                 <MDBTypography tag="h5" className="fw-normal mb-0">
//                   <a href="#!">Pay</a>
//                 </MDBTypography>

//                 <MDBTypography tag="h5" className="fw-normal mb-0">
//                   <a href="#!">Cancel</a>
//                 </MDBTypography>

//                 <div className="border-start h-100"></div>

//                 <MDBTypography tag="h5" className="fw-normal mb-0">
//                   <a href="#!" className="text-muted">
//                     <MDBIcon fas icon="ellipsis-v" />
//                   </a>
//                 </MDBTypography>
//               </div>
//             </MDBCardFooter>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   ));

//   return (
//     <>
//       <div>{disp}</div>
//     </>
//   );
// }
