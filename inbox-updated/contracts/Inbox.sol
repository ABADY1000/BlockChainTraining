// SPDX-License-Idntifier: MIT

pragma solidity ^0.8.9;

contract Inbox{
    string 0public message;

    constructor (string memory initMessage) {
        message = initMessage;
    }

    function setMessage(string newMessage) public{
        message = newMessage;
    }
}