import React, { useState } from "react";
import "./Formulary.css";

const Formulary = () => {
  const estilo = {
        minWidth: '320px',
        height: '700px'
    }
  return (
    <div>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/ic3386941/reunion-con-el-cliente"
        style={ estilo }
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </div>
  );
};

export default Formulary;
