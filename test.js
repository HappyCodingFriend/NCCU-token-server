const Web3 = require('web3')
const web3 = new Web3('http://localhost:8545')

web3.eth.getBalance('0xe5d4ce6b4addbd1e9e721592face47706b2605fe').then(console.log)
