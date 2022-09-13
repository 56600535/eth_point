export default {
	value: [{
			"anonymous": false,
			"inputs": [{
					"indexed": true,
					"internalType": "address",
					"name": "oldOwner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "OwnerSet",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [{
					"indexed": false,
					"internalType": "string",
					"name": "_lat",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "_lon",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "_title",
					"type": "string"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "_desc",
					"type": "string"
				}
			],
			"name": "addPointEvent",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}],
			"name": "updatePriceEvent",
			"type": "event"
		},
		{
			"inputs": [{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}],
			"name": "changeOwner",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
			"name": "db",
			"outputs": [{
					"internalType": "string",
					"name": "lat",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "lon",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "title",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "desc",
					"type": "string"
				},
				{
					"internalType": "uint64",
					"name": "date",
					"type": "uint64"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getOwner",
			"outputs": [{
				"internalType": "address",
				"name": "",
				"type": "address"
			}],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getPrice",
			"outputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getShowPoint",
			"outputs": [{
				"components": [{
						"internalType": "string",
						"name": "lat",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "lon",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "desc",
						"type": "string"
					},
					{
						"internalType": "uint64",
						"name": "date",
						"type": "uint64"
					}
				],
				"internalType": "struct Data.Point[]",
				"name": "point",
				"type": "tuple[]"
			}],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "price",
			"outputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [{
					"internalType": "string",
					"name": "_lat",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_lon",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_title",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_desc",
					"type": "string"
				}
			],
			"name": "putPoint",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		}
	]
}
