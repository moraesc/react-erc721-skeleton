import { useState } from 'react';
import abi from './utils/Greeter.json';
import { ethers } from "ethers";

function App() {
  const [address, setAddress] = useState('');

  const contractAddress = 'CONTRACT_ADDRESS';
  const contractAbi = abi.abi;

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        return;
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

      if (accounts.length !== 0) {
        const address = accounts[0];
        setAddress(address);
      }
    } catch(error) {
      console.log(error);
    }

  }

  const mint = async () => {
   const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);

      if (contract) {
        await contract.mint();
      }
    } else {
      console.log('Ethereum obejct doesn not exist');
    }
  }

  return (
    <div className='app'>
      {address !== '' ? <p>{address}</p> : <button onClick={connectWallet}>Connect</button>}
      <button onClick={mint}>Mint</button>
    </div>
  );
}

export default App;