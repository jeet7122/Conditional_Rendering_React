import React from "react";
import Form from "./Form";
import Header from "./Header";

let isloggedin = false;

// function Render() {
//   if (isloggedin) {
//     return <Header />;
//   } else {
//     return <Form />;
//   }
// }

function App() {
  return <div className="container">{isloggedin ? <Header /> : <Form />}</div>;
}

export default App;
