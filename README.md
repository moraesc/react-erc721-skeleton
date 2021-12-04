# About
Barebones React app that allows user to connect to wallet and mint an ERC-721 token. Code for ERC-721 included. 

# Set up

## `yarn install`

## `yarn add hardhat`

## `npx hardhat`
Click "enter" for all questions to use the default hardhat config.

## Update hardhat.config.js
Add alchemy (or other provider) url, wallet private key, and etherscan API key.

## `npx hardhat run scripts/deploy.js --network rinkeby`
Deploy contract to Rinkeby network. Copy and paste contract address and save for later.
Contract can be viewed at rinkeby.etherscan.io/<contract_address>

## Copy contract ABI and paste it in /src/utils/Greeter.json
Copy the /artifacts/contracts/Greeter.json file and paste it in /src/utils/Greeter.json

## Open /src/App.js and replace 'CONTRACT_ADDRESS' with the contract address

# Run app

## `yarn start`
