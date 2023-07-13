import React from "react";
import Navbr from "./components/Navbr";
import TextForm from "./components/TextForm";

export default function App() {
  return (
    <>
      {<Navbr title="TextUtils" abtxt="AboutUs" />}
      <div className="container">
        {<TextForm heading="Enter the text to analyze" />}
      </div>
    </>
  );
}
