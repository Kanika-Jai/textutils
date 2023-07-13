import React from "react";
import { Button } from "react-bootstrap";

export default function TextForm(props) {
  return (
    <div className="mb-3">
      <h1>{props.heading}</h1>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="12"
      ></textarea>
      <div style={{marginTop:'10px'}}>
      <button className="btn btn-primary">
        Convert to uppercase
      </button>
      </div>
    </div>
  );
}
