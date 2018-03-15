var contracts = {
    "ERC223Token": {
        "abi": [
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "name": "_name",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_now",
                        "type": "uint64"
                    }
                ],
                "name": "time",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "name": "_totalSupply",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "deadline",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint64"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "name": "_decimals",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "MAX_UINT256",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "t",
                        "type": "address"
                    },
                    {
                        "name": "a1",
                        "type": "uint256"
                    },
                    {
                        "name": "a2",
                        "type": "uint256"
                    },
                    {
                        "name": "_deadline",
                        "type": "uint64"
                    }
                ],
                "name": "addExchange",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "name": "_symbol",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "name": "_data",
                        "type": "bytes"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "valid",
                "outputs": [
                    {
                        "name": "_valid",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "name": "_data",
                        "type": "bytes"
                    },
                    {
                        "name": "_custom_fallback",
                        "type": "string"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "success",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "name": "_symbol",
                        "type": "string"
                    },
                    {
                        "name": "_decimals",
                        "type": "uint8"
                    },
                    {
                        "name": "_totalSupply",
                        "type": "uint256"
                    },
                    {
                        "name": "_deadline",
                        "type": "uint64"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "_data",
                        "type": "bytes"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            }
        ],
        "bytecode": "0x60606040526001600560086101000a81548160ff021916908315150217905550600060065534156200003057600080fd5b60405162002073380380620020738339810160405280805182019190602001805182019190602001805190602001909190805190602001909190805190602001909190505084600190805190602001906200008d929190620001d6565b508360029080519060200190620000a6929190620001d6565b5082600360006101000a81548160ff021916908360ff160217905550600360009054906101000a900460ff1660ff16600a0a82026000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460048190555080600560006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555033600560096101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505062000285565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200021957805160ff19168380011785556200024a565b828001600101855582156200024a579182015b82811115620002495782518255916020019190600101906200022c565b5b5090506200025991906200025d565b5090565b6200028291905b808211156200027e57600081600090555060010162000264565b5090565b90565b611dde80620002956000396000f3006060604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100ca5780630eee513f1461015857806318160ddd1461018557806329dcb0cf146101ae578063313ce567146101eb57806333a581d21461021a57806356ea76361461024357806370a08231146102a157806395d89b41146102ee578063a9059cbb1461037c578063be45fd62146103d6578063c199121914610473578063f6368f8a146104a0575b600080fd5b34156100d557600080fd5b6100dd610580565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561011d578082015181840152602081019050610102565b50505050905090810190601f16801561014a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561016357600080fd5b610183600480803567ffffffffffffffff16906020019091905050610628565b005b341561019057600080fd5b6101986106d1565b6040518082815260200191505060405180910390f35b34156101b957600080fd5b6101c16106db565b604051808267ffffffffffffffff1667ffffffffffffffff16815260200191505060405180910390f35b34156101f657600080fd5b6101fe6106f5565b604051808260ff1660ff16815260200191505060405180910390f35b341561022557600080fd5b61022d61070c565b6040518082815260200191505060405180910390f35b341561024e57600080fd5b61029f600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001909190803567ffffffffffffffff16906020019091905050610730565b005b34156102ac57600080fd5b6102d8600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610839565b6040518082815260200191505060405180910390f35b34156102f957600080fd5b610301610881565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610341578082015181840152602081019050610326565b50505050905090810190601f16801561036e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561038757600080fd5b6103bc600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610929565b604051808215151515815260200191505060405180910390f35b34156103e157600080fd5b610459600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610983565b604051808215151515815260200191505060405180910390f35b341561047e57600080fd5b6104866109d5565b604051808215151515815260200191505060405180910390f35b34156104ab57600080fd5b610566600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506109ec565b604051808215151515815260200191505060405180910390f35b610588611219565b60018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561061e5780601f106105f35761010080835404028352916020019161061e565b820191906000526020600020905b81548152906001019060200180831161060157829003601f168201915b5050505050905090565b3373ffffffffffffffffffffffffffffffffffffffff16600560099054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156106ce57600560009054906101000a900467ffffffffffffffff1667ffffffffffffffff168167ffffffffffffffff161015156106cd576000600560086101000a81548160ff0219169083151502179055505b5b50565b6000600454905090565b600560009054906101000a900467ffffffffffffffff1681565b6000600360009054906101000a900460ff16905090565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81565b61073861122d565b6000333087878787610748611241565b808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018381526020018267ffffffffffffffff1667ffffffffffffffff1681526020019650505050505050604051809103906000f080151561082357600080fd5b9050610830818684610d48565b50505050505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610889611219565b60028054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561091f5780601f106108f45761010080835404028352916020019161091f565b820191906000526020600020905b81548152906001019060200180831161090257829003601f168201915b5050505050905090565b600061093361122d565b600560089054906101000a900460ff16151561094e57600080fd5b61095784610ee6565b1561096e57610967848483610ef9565b915061097c565b610979848483610d48565b91505b5092915050565b6000600560089054906101000a900460ff1615156109a057600080fd5b6109a984610ee6565b156109c0576109b9848484610ef9565b90506109ce565b6109cb848484610d48565b90505b9392505050565b6000600560089054906101000a900460ff16905090565b6000600560089054906101000a900460ff161515610a0957600080fd5b610a1285610ee6565b15610d325783610a2133610839565b10151515610a2e57600080fd5b610a40610a3a33610839565b856111bf565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a94610a8e86610839565b856111db565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff166000836040518082805190602001908083835b602083101515610b255780518252602082019150602081019050602083039250610b00565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390207c01000000000000000000000000000000000000000000000000000000009004903387876040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828051906020019080838360005b83811015610c06578082015181840152602081019050610beb565b50505050905090810190601f168015610c335780820380516001836020036101000a031916815260200191505b50935050505060006040518083038185886187965a03f193505050501515610c5757fe5b8473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1686866040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610cee578082015181840152602081019050610cd3565b50505050905090810190601f168015610d1b5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a360019050610d40565b610d3d858585610d48565b90505b949350505050565b600082610d5433610839565b10151515610d6157600080fd5b610d73610d6d33610839565b846111bf565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610dc7610dc185610839565b846111db565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1685856040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610ea0578082015181840152602081019050610e85565b50505050905090810190601f168015610ecd5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a3600190509392505050565b600080823b905060008111915050919050565b60008083610f0633610839565b10151515610f1357600080fd5b610f25610f1f33610839565b856111bf565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f79610f7386610839565b856111db565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508490508073ffffffffffffffffffffffffffffffffffffffff1663c0ee0b8a3386866040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611080578082015181840152602081019050611065565b50505050905090810190601f1680156110ad5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b15156110cd57600080fd5b6102c65a03f115156110de57600080fd5b5050508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1686866040518083815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561117857808201518184015260208101905061115d565b50505050905090810190601f1680156111a55780820380516001836020036101000a031916815260200191505b50935050505060405180910390a360019150509392505050565b60008183101515156111d057600080fd5b818303905092915050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03831115151561120e57600080fd5b818301905092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b604051610b61806112528339019056006060604052341561000f57600080fd5b60405160c080610b6183398101604052808051906020019091908051906020019091908051906020019091908051906020019091908051906020019091908051906020019091905050856000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826003819055508160048190555080600560006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506001600560086101000a81548160ff0219169083151502179055507f0453a1fb3a773dbebdf89a3b20c719c82a91ac83a7a7db37386cb4572307f40986604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150505050505061097d806101e46000396000f300606060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630eee513f1461009e5780635f8d96de146100cb57806371402a4114610108578063843222331461015d578063893d20e8146101865780639e8994bd146101db578063c0ee0b8a14610204578063ce62101414610289578063ea8a1af0146102de575b600080fd5b34156100a957600080fd5b6100c9600480803567ffffffffffffffff169060200190919050506102f3565b005b34156100d657600080fd5b6100de610332565b604051808267ffffffffffffffff1667ffffffffffffffff16815260200191505060405180910390f35b341561011357600080fd5b61011b610350565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561016857600080fd5b61017061037a565b6040518082815260200191505060405180910390f35b341561019157600080fd5b610199610384565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101e657600080fd5b6101ee6103ad565b6040518082815260200191505060405180910390f35b341561020f57600080fd5b610287600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506103b7565b005b341561029457600080fd5b61029c610740565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102e957600080fd5b6102f161076a565b005b600560009054906101000a900467ffffffffffffffff1667ffffffffffffffff168167ffffffffffffffff1610151561032f5761032e61076a565b5b50565b6000600560009054906101000a900467ffffffffffffffff16905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600354905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600454905090565b600454821480156103d45750600560089054906101000a900460ff165b15610651577feb63b6fa4a62ba2ac5802d665fa1d2d375e2fb147f121dc1a97908bf724510fb83604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb846003546000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b151561050b57600080fd5b6102c65a03f1151561051c57600080fd5b5050506040518051905050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b151561061557600080fd5b6102c65a03f1151561062657600080fd5b50505060405180519050506000600560086101000a81548160ff02191690831515021790555061073b565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b151561071e57600080fd5b6102c65a03f1151561072f57600080fd5b50505060405180519050505b505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156107c557600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff166003546000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15156108b557600080fd5b6102c65a03f115156108c657600080fd5b50505060405180519050506000600560086101000a81548160ff0219169083151502179055507ffad9cd214f4d7ceb40d61e35d51bcc2ff68e51622823e9ce3b656f397b25728430604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15600a165627a7a7230582063120eb3814327f23fc015da93b67e876155209ad8756e5ecc2f752c8aa366470029a165627a7a7230582008092754ae1b344f641309d91e6137421a9820587a1a8356c430d4a09e6625d30029"
    },
    "Exchange": {
        "abi": [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_time",
                        "type": "uint64"
                    }
                ],
                "name": "time",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getDeadline",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint64"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getT2",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getA1",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getOwner",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getA2",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    },
                    {
                        "name": "_data",
                        "type": "bytes"
                    }
                ],
                "name": "tokenFallback",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getT1",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "cancel",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_t1",
                        "type": "address"
                    },
                    {
                        "name": "_t2",
                        "type": "address"
                    },
                    {
                        "name": "_a1",
                        "type": "uint256"
                    },
                    {
                        "name": "_a2",
                        "type": "uint256"
                    },
                    {
                        "name": "_deadline",
                        "type": "uint64"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "from",
                        "type": "address"
                    }
                ],
                "name": "addExchangeEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "from",
                        "type": "address"
                    }
                ],
                "name": "doExchangeEvent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "name": "cancelExchangeEvent",
                "type": "event"
            }
        ],
        "bytecode": "0x6060604052341561000f57600080fd5b60405160c080610b6183398101604052808051906020019091908051906020019091908051906020019091908051906020019091908051906020019091908051906020019091905050856000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826003819055508160048190555080600560006101000a81548167ffffffffffffffff021916908367ffffffffffffffff1602179055506001600560086101000a81548160ff0219169083151502179055507f0453a1fb3a773dbebdf89a3b20c719c82a91ac83a7a7db37386cb4572307f40986604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150505050505061097d806101e46000396000f300606060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630eee513f1461009e5780635f8d96de146100cb57806371402a4114610108578063843222331461015d578063893d20e8146101865780639e8994bd146101db578063c0ee0b8a14610204578063ce62101414610289578063ea8a1af0146102de575b600080fd5b34156100a957600080fd5b6100c9600480803567ffffffffffffffff169060200190919050506102f3565b005b34156100d657600080fd5b6100de610332565b604051808267ffffffffffffffff1667ffffffffffffffff16815260200191505060405180910390f35b341561011357600080fd5b61011b610350565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561016857600080fd5b61017061037a565b6040518082815260200191505060405180910390f35b341561019157600080fd5b610199610384565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101e657600080fd5b6101ee6103ad565b6040518082815260200191505060405180910390f35b341561020f57600080fd5b610287600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506103b7565b005b341561029457600080fd5b61029c610740565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102e957600080fd5b6102f161076a565b005b600560009054906101000a900467ffffffffffffffff1667ffffffffffffffff168167ffffffffffffffff1610151561032f5761032e61076a565b5b50565b6000600560009054906101000a900467ffffffffffffffff16905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600354905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600454905090565b600454821480156103d45750600560089054906101000a900460ff165b15610651577feb63b6fa4a62ba2ac5802d665fa1d2d375e2fb147f121dc1a97908bf724510fb83604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb846003546000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b151561050b57600080fd5b6102c65a03f1151561051c57600080fd5b5050506040518051905050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b151561061557600080fd5b6102c65a03f1151561062657600080fd5b50505060405180519050506000600560086101000a81548160ff02191690831515021790555061073b565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb84846000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b151561071e57600080fd5b6102c65a03f1151561072f57600080fd5b50505060405180519050505b505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b3373ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156107c557600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff166003546000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15156108b557600080fd5b6102c65a03f115156108c657600080fd5b50505060405180519050506000600560086101000a81548160ff0219169083151502179055507ffad9cd214f4d7ceb40d61e35d51bcc2ff68e51622823e9ce3b656f397b25728430604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15600a165627a7a7230582063120eb3814327f23fc015da93b67e876155209ad8756e5ecc2f752c8aa366470029"
    }
}