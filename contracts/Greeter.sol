//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Song is ERC721, ERC721URIStorage {

    uint256 public totalTokens = 0;
    string private _tokenBaseURI;

    constructor() ERC721("Greeter", "GREETER") {}

    function mint() public {
        totalTokens++;
        _safeMint(_msgSender(), totalTokens);
    }

    function getTokenId() public view returns (uint256) {
        return totalTokens;
    }

    function _baseURI() internal override view returns (string memory) {
        return _tokenBaseURI;
    }

    function setBaseURI(string memory baseURI) public {
        _tokenBaseURI = baseURI;
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        string memory baseURI = _baseURI();
        
        if (bytes(baseURI).length > 0) {
            return string(abi.encodePacked(baseURI)); //Append token ID to this if required in token URI
        }
        
        return "";
    }
}