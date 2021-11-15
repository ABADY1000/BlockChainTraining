// https://rinkeby.infura.io/v3/c520d3ab5dfc483e90822fbdfd707bf3
// Requires
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const {abi, evm} = require('../compile');

const web3 = new Web3(ganache.provider())

let lottery;
let accounts;

beforeEach(async () => {

    accounts = await web3.eth.getAccounts();
    
    lottery = await new web3.eth.Contract(JSON.parse(abi))
    .deploy({data: evm})
    .send({from: accounts[0], gas: '1000000'});
});

describe('Lottery Contract', ()=>{
    it("deploys a contract", ()=>{
        assert.ok(lottery.options.address);
    });
});