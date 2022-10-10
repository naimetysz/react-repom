import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

//! index componenti ReactDOM.createRoot() metodu ile
//! public klasorunde yer alan index.html icersindeki id'si root
//! olan elemana erisir.
// const element =( <div><h1>helllo {a}react</h1>;
// <p> merhaba </p>
// </div> 
// ) 
// const a = 5
// istersem degiskende tanimlarim
// componentler fonction like yapilardir burada return edilen degeri dom a basar

//* render() metodu içerisinde App componenti cagrilir. uppercase kullan function like yapinin ilk harfini buyuk yap
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />); // doma giris noktamiz 
