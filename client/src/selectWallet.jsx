import React, { useState } from "react";
import walletData from "../../records.json"; // Import the wallet data

const dropdownStyles = {
  fontSize: "16px",
  padding: "10px",
  width: "100%",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "white",
};

const selectedWalletStyles = {
  marginTop: "10px",
  fontSize: "18px",
  fontWeight: "bold",
};

function SelectWallet({ onSelectWallet }) {
  const [publicKey, setPublicKey] = useState("");

  const handleWalletSelection = (event) => {
    const selectedAddress = event.target.value;
    const selectedWalletData = walletData.find(
      (wallet) => wallet.wallet === selectedAddress
    );
    if (selectedWalletData) {
      onSelectWallet(selectedAddress); // Callback to parent component
      setPublicKey(selectedWalletData.wallet); // Displaying the public key
    } else {
      onSelectWallet("");
      setPublicKey("");
    }
  };

  return (
    <div>
      <h1>Select a Wallet</h1>
      <select style={dropdownStyles} onChange={handleWalletSelection}>
        <option value="">Select a wallet</option>
        {walletData.map((wallet, index) => (
          <option key={index} value={wallet.wallet}>
            {wallet.wallet}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectWallet;
