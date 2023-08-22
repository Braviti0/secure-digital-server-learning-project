import React, { useState } from "react";
import Wallet from "./Wallet";
import Transfer from "./Transfer";
import SelectWallet from "./SelectWallet";
import walletData from "../../records.json"; // Import your wallet data
import "./App.scss";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const handleSelectWallet = (wallet, data) => {
    setAddress(wallet); // Update address state

    // Find the selected wallet's data
    const selectedWalletData = data.find(
      (walletData) => walletData.wallet === wallet
    );

    if (selectedWalletData) {
      setPrivateKey(selectedWalletData.pik); // Update private key
      setBalance(selectedWalletData.balance); // Update balance
    } else {
      setPrivateKey("");
      setBalance(0);
    }
  };

  return (
    <div className="app">
      <SelectWallet
        onSelectWallet={(wallet) => handleSelectWallet(wallet, walletData)}
      />
      <Wallet balance={balance} address={address} />
      <Transfer
        setBalance={setBalance}
        address={address}
        privateKey={privateKey}
      />
    </div>
  );
}

export default App;
