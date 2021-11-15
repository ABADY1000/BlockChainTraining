const path = require('path');
const fs = require('fs');

const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

compiled_code = solc.compile(source, 1);

module.exports = compiled_code.contracts[':Lottery'];
