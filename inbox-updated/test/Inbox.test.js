// https://rinkeby.infura.io/v3/c520d3ab5dfc483e90822fbdfd707bf3
// Requires
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const {abi, evm} = require('../compile');

// Web3 Constructor
const web3 = new Web3(ganache.provider());

let accounts;
let inbox;

const INIT_MESSAGE = 'Hello world!';
// Every funcntion in web3 return a promise
beforeEach(async ()=>{
    
    // Get all accounts
    accounts = await web3.eth.getAccounts();

    // Use one of these accounts to deploy the contract
    inbox = await new web3.eth.Contract(abi)
    .deploy({
        data: evm.bytecode.object,
        arguments: [INIT_MESSAGE]
    })
    .send({from: accounts[0], gas: '1000000'});
});

describe('Inbox', ()=>{
    it('deploy a contract', ()=>{
        // console.log(inbox);
        assert.ok(inbox.options.address)
    });

    it('has default message', async ()=>{
        const message = await inbox.methods.message().call();
        assert.equal(message, INIT_MESSAGE);
    });

    it('can change the message', async()=>{
        await inbox.methods.setMessage('final').send({from: accounts[0]});
        const message = await inbox.methods.message().call();
        assert.equal(message, 'final');
    });
});




// class Car{
//     park(){
//         return 'stopped';
//     }

//     drive(){
//         return 'vroom';
//     }
// }

// let car;
// beforeEach(() => {
//     car = new Car();
// });

// describe('Car Class Test', () =>{
    
//     it('can park', () => {
//         assert.equal(car.park(), 'stopped');
//     });

//     it('can drive', () => {
//         assert.equal(car.drive(), 'vroom');
//     });
// });


