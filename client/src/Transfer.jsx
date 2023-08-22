import { useState } from "react";
import server from "./server";
import walletData from "../../records.json"; // Import the wallet data directly

function Transfer({ address, setBalance, privateKey }) {
  const [sendAmount, setSendAmount] = useState("");
  const [selectedRecipient, setSelectedRecipient] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();

    try {
      const {
        data: { balance },
      } = await server.post(`send`, {
        sender: address,
        amount: parseInt(sendAmount),
        recipient: selectedRecipient,
      });
      setBalance(balance);
    } catch (ex) {
      alert(ex.response.data.message);
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        />
      </label>

      <label>
        Recipient
        <select
          value={selectedRecipient}
          onChange={setValue(setSelectedRecipient)}
        >
          <option value="">Select a recipient</option>
          {walletData.map((wallet) => (
            <option key={wallet.wallet} value={wallet.wallet}>
              {wallet.wallet}
            </option>
          ))}
        </select>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
}

export default Transfer;
