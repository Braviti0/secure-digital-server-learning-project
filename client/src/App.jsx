import React, { useState } from "react";
import Wallet from "./Wallet";
import Transfer from "./Transfer";
import SelectWallet from "./SelectWallet";
import walletData from "../../records"; // Import your wallet data
import "./App.scss";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [selectedWallet, setSelectedWallet] = useState(""); // Local state

  const handleSelectWallet = (wallet, data) => {
    setSelectedWallet(wallet); // Update local state

    // Find the selected wallet's data
    const selectedWalletData = data.find(
      (wallet) => wallet.wallet === wallet
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
      <SelectWallet onSelectWallet={handleSelectWallet} />
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
        wallet={selectedWallet}
        privateKey={privateKey}
      />
      <Transfer
        setBalance={setBalance}
        address={address}
        privateKey={privateKey}
      />
    </div>
  );
}

export default App;
