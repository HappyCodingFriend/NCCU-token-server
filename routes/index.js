const express = require('express')
const router = express.Router()

// sign with default (HMAC SHA256)
const jwt = require('jsonwebtoken')

const Web3 = require('web3')
const web3 = new Web3('http://localhost:8545')

const ERC223Token = require('../library/ERC223Token')
const ERC223TokenContract = new web3.eth.Contract(ERC223Token.abi)

const mysql = require('../library/mysql')
mysql.connect()

router.get('/check', function (req, res) {
	console.log('check')
	console.log(req.query)

	let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
		if (err) {
			console.error(err)
			res.status(400).send({ type: false, error: 'jwtInvalidError' })
		}
		else {
			decoded.type = true
			console.log(decoded)
			res.json(decoded)
		}
	})
})

//登入
router.post('/signIn', function (req, res) {
	console.log('sign in')
	console.log(req.body)

	if (!(req.body.ID && req.body.password)) {
		res.status(200).json({ type: false, inf: '資料缺失' })
	}
	else {
		mysql.sing_in(req.body.ID, req.body.password, (result) => {
			if (result.type) {
				let data = {
					ID: result.ID,
					email: result.email,
					address: result.address,
				}
				let time = {
					expiresIn: '24h'
				}
				result.token = jwt.sign(data, 'secret', time)
			}
			console.log(result)
			res.json(result)
		})
	}
})

//註冊
router.post('/signUp', function (req, res) {
	console.log('sign up')
	console.log(req.body)

	if (!(req.body.ID && req.body.password && req.body.name && req.body.email && req.body.address)) {
		res.json({ type: false, inf: '資料缺失' })
	}
	else {
		mysql.sing_up(req.body.ID, req.body.password, req.body.name, req.body.email, req.body.address, (result) => {
			res.json(result)
		})
	}
})

// 會員管理
router.route('/user')
	//取得
	.get(function (req, res) {
		console.log('get user')
		let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
			if (err) {
				console.error(err)
				res.status(400).send({ type: false, error: 'jwtInvalidError' })
			}
			else {
				mysql.getUser(req.query.ID, (result) => {
					res.json(result)
				})
			}
		})
	})
	//更新
	.put(function (req, res, next) {
		console.log('update user')
		let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
			if (err) {
				console.error(err)
				res.status(400).send({ type: false, error: 'jwtInvalidError' })
			}
			else {
				mysql.updateUser(decoded.ID, req.body.address, (result) => {
					console.log(result)
					res.json(result)
				})
			}
		})
	})

// 點數
router.get('/points', function (req, res) {
	console.log('points')
	let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
		if (err) {
			console.error(err)
			res.status(400).send({ type: false, error: 'jwtInvalidError' })
		}
		else {
			mysql.getPoints(result => {
				res.json(result)
			})
		}
	})
})

router.get('/point/:address', function (req, res) {
	console.log('point')
	console.log(req.params.address)
	let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
		if (err) {
			console.error(err)
			res.status(400).send({ type: false, error: 'jwtInvalidError' })
		}
		else {
			ERC223TokenContract.options.address = req.params.address
			ERC223TokenContract.methods.balanceOf(decoded.address).call().then(function (result) {
				res.send(result)
			})
		}
	})
})

// 好友管理
router.get('/friends', function (req, res) {
	let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
		if (err) {
			console.error(err)
			res.status(400).send({ type: false, error: 'jwtInvalidError' })
		}
		else {
			mysql.getFriends(decoded.ID, (result) => {
				res.json(result)
			})
		}
	})
})

router.route('/friend/:friendID')
	//取得好友
	.get(function (req, res) {

	})
	//新增好友
	.post(function (req, res) {
		let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
			if (err) {
				console.error(err)
				res.status(400).send({ type: false, error: 'jwtInvalidError' })
			}
			else {
				mysql.addFriend(decoded.ID, req.params.friendID, (result) => {
					res.json(result)
				})
			}
		})
	})
	//刪除好友
	.delete(function (req, res) {
		let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
			if (err) {
				console.error(err)
				res.status(400).send({ type: false, error: 'jwtInvalidError' })
			}
			else {
				mysql.deleteFriend(decoded.ID, req.params.friendID, (result) => {
					res.json(result)
				})
			}
		})
	})

// 收支功能
router.route('/transaction')
	//取得交易
	.get(async function (req, res) {
		console.log('get transaction')

	})
	//送出交易
	.post(function (req, res) {
		console.log('post transaction')
		console.log(req.body)

		let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
			if (err) {
				console.error(err)
				res.status(400).send({ type: false, error: 'jwtInvalidError' })
			}
			else {
				web3.eth.sendSignedTransaction(req.body.signTx)
					.on('receipt', function (result) {
						console.log(result)
						mysql.setTransaction(decoded.ID, req.body.targetID, req.body.number, req.body.point, result.transactionHash, () => {
							res.json(result)
						})
					})
					.on('error', function (err) {
						console.log(err)
						res.send(err)
					})
			}
		})
	})

// 掛單
router.get('/orders', function (req, res) {
	let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
		if (err) {
			console.error(err)
			res.status(400).send({ type: false, error: 'jwtInvalidError' })
		}
		else {
			mysql.getOrders((result) => {
				res.json(result)
			})
		}
	})
})

router.route('/order')
	//取得掛單
	.get(function (req, res) {

	})
	//送出掛單
	.post(function (req, res) {
		console.log('post order')
		//console.log(req.body)

		let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
			if (err) {
				console.error(err)
				res.status(400).send({ type: false, error: 'jwtInvalidError' })
			}
			else {
				web3.eth.sendSignedTransaction(req.body.signTx)
					.on('receipt', function (result) {
						//console.log(result)
						for (let i in result.logs) {
							if (result.logs[i].topics[0] == '0x0453a1fb3a773dbebdf89a3b20c719c82a91ac83a7a7db37386cb4572307f409') {
								mysql.addOrder(result.logs[i].address.toString(), decoded.ID, req.body.point1, req.body.value1, req.body.point2, req.body.value2, (result) => {
									res.json(result)
								})
							}
						}
					})
					.on('error', function (err) {
						console.log(err)
						res.send(err)
					})
			}
		})
	})
	.put(function (req, res) {
		console.log('put order')

		let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
			if (err) {
				console.error(err)
				res.status(400).send({ type: false, error: 'jwtInvalidError' })
			}
			else {
				web3.eth.sendSignedTransaction(req.body.signTx)
					.on('receipt', function (txResult) {
						mysql.updateOrder(req.body.autoID, decoded.ID, (sqlResult) => {
							res.json({
								type: true,
								txResult,
							})
						})
					})
					.on('error', function (err) {
						console.error(err)
						res.json({ type: false })
					})
			}
		})
	})

// 查詢系統
router.get('/query/transactionsTo', function (req, res) {
	console.log('query/transactions')

	let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
		if (err) {
			console.error(err)
			res.status(400).send({ type: false, error: 'jwtInvalidError' })
		}
		else {
			mysql.gatTransactionsTo(decoded.ID, (result) => {
				res.json(result)
			})
		}
	})
})

router.get('/query/transactionsFrom', function (req, res) {
	console.log('query/transactions')

	let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
		if (err) {
			console.error(err)
			res.status(400).send({ type: false, error: 'jwtInvalidError' })
		}
		else {
			mysql.gatTransactionsFrom(decoded.ID, (result) => {
				res.json(result)
			})
		}
	})
})

router.get('/query/transaction/:transactionID', function (req, res) {

})

router.get('/query/orderTo', function (req, res) {
	let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
		if (err) {
			console.error(err)
			res.status(400).send({ type: false, error: 'jwtInvalidError' })
		}
		else {
			mysql.getOrderTo(decoded.ID, (result) => {
				res.json(result)
			})
		}
	})
})

router.get('/query/orderFrom', function (req, res) {
	let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
		if (err) {
			console.error(err)
			res.status(400).send({ type: false, error: 'jwtInvalidError' })
		}
		else {
			mysql.getOrderFrom(decoded.ID, (result) => {
				res.json(result)
			})
		}
	})
})

router.get('/nonce', function (req, res, next) {
	console.log('nonce')

	let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
		if (err) {
			console.error(err)
			res.status(400).send({ type: false, error: 'jwtInvalidError' })
		}
		else {
			web3.eth.getTransactionCount(decoded.address).then(function (result) {
				res.send(result.toString())
			})
		}
	})

})

module.exports = router
