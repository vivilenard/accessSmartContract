require('dotenv').config();
const { AlchemyProvider } = require('ethers');
const ethers = require('ethers');

const abi = [
      {
        "inputs": [],
        "name": "count",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "dec",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "get",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "inc",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]
const provider = new AlchemyProvider('sepolia', process.env.API_KEY);

const signer = new ethers.Wallet(process.env.PRIV_KEY, provider);

async function main(){
    const contract = new ethers.Contract('0x38d588441A9aed50704eFD5Efe0864aF602aE4b4', abi, signer);

    // let counterValue = await contract.get();
    // console.log('the counter value is: ' + counterValue);
    
    await contract.inc();
    let counterValue = await contract.get();
    console.log('the counter value is: ' + counterValue);

}

main();