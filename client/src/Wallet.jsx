import React from "react";

function Wallet({ wallet, balance }) {
  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>
      <div className="address">Selected Account Address: {wallet}</div>
      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
