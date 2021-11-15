const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {abi, evm} = require('./compile');

const provider = new HDWalletProvider(
    'federal pond thought shuffle journey cry turtle minimum absent pig inherit purpose',
    'https://rinkeby.infura.io/v3/c520d3ab5dfc483e90822fbdfd707bf3'
);

const web3 = new Web3(provider);

const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts();

    console.log('Trying to deploy account: ', accounts);

    const result = await new web3.eth.Contract(JSON.parse(abi))
                    .deploy({
                        data: evm.bytecode.object
                    })
                    .send({gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to: ', result.options.address);
    provider.engine.stop();
};

deploy();