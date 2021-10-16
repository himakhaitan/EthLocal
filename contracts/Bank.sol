// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;

contract Bank {
    address manager;
    mapping(address => uint256) public dataBase;

    // Events
    event Deposit(address _sender, uint256 _amount);
    event Withdrawal(address _receiver, uint256 _amount);
    event Transfer(address _sender, address _receiver, uint256 _amount);

    constructor() public {
        manager = msg.sender;
    }

    modifier isManager() {
        require(msg.sender == manager, "Manager Access Only!");
        _;
    }

    function totalBal() public view returns (uint256) {
        return address(this).balance;
    }

    function bankBalance(address _add) public view returns (uint256) {
        return dataBase[_add];
    }

    function deposit() public payable {
        emit Deposit(msg.sender, msg.value);
        dataBase[msg.sender] += msg.value;
    }

    modifier checkBalance(address _a, uint256 _amount) {
        require(dataBase[_a] >= _amount, "Insufficient Funds!");
        _;
    }

    function withdraw(uint256 _amount)
        public
        checkBalance(msg.sender, _amount)
    {
        // require(dataBase[msg.sender] >= _amount, "Insufficient funds!");
        emit Withdrawal(msg.sender, _amount);
        address payable add = address(uint160(msg.sender));
        add.transfer(_amount);
        dataBase[msg.sender] -= _amount;
    }

    function transfer(address _receiver, uint256 _amount)
        public
        checkBalance(msg.sender, _amount)
    {
        // require(dataBase[msg.sender] >= amount, "Insufficient funds!");
        emit Transfer(msg.sender, _receiver, _amount);
        dataBase[msg.sender] -= _amount;
        dataBase[_receiver] += _amount;
    }
}
