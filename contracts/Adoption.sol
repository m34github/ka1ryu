pragma solidity ^0.5.0;

contract Adoption {
    address[16] public adopters;
    mapping (address => string) ownedLand;

    // Adopting land：土地を買う
    //  ・landIdとmsg.senderを紐づける
    function adopt(uint landId) public returns (uint) {

        adopters[landId] = msg.sender;

        return landId;
    }

    // Retrieving the adopters：買い主リスト
    //  ・adoptersリストが全て返る
    function getAdopters() public view returns (address[16] memory) {
        return adopters;
    }
}
