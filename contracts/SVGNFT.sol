// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "base64-sol/base64.sol";


contract SVGNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;

    event CreateSVGNFT(uint256 indexed tokenId, string tokenURI);

    constructor() ERC721("Amence S NFT", "ASNFT"){
        tokenCounter = 0;
    }

    /*
    *创建nft
     */
    function create(string memory svg) public {
        _safeMint(msg.sender,tokenCounter);
        string memory imageURI = svgToIMageURI(svg);
        _setTokenURI(tokenCounter, formatTokenURI(imageURI));
        tokenCounter += 1;
        emit CreateSVGNFT(tokenCounter, svg);
    }

    function svgToIMageURI(string memory svg) public pure returns (string memory){
        string memory baseURL = "data:image/svg+xml;base64,";
        string memory svgBase64Encoded = Base64.encode(bytes(string(abi.encodePacked(svg))));
        return string(abi.encodePacked(baseURL, svgBase64Encoded));

    }

    function formatTokenURI(string memory imageURI) public pure returns (string memory){
        return string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(
                    bytes(
                        abi.encodePacked(
                            '{"name":"',
                            "SVG NFT", // You can add whatever name here
                            '", "description":"An NFT based on SVG!", "attributes":"", "image":"', imageURI, '"}'
                        )
                    )
                )
            )
        );

    }


}
