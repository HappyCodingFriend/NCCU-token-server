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

let jwtCheck = function (req, res, next) {
	console.log('jwt check')
	let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
		if (err) {
			console.error(err)
			res.status(400).send({ type: false, error: 'jwtInvalidError' })
		}
		else {
			console.log(decoded)
			next()
		}
	})
}

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
router.post('signUp', function (req, res) {
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
	//登入
	.get(function (req, res) {

	})
	//註冊
	.post(function (req, res) {

	})
	//更新
	.put(function (req, res, next) {
		console.log('sign_update')
		let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
			if (err) {
				console.error(err)
				res.status(400).send({ type: false, error: 'jwtInvalidError' })
			}
			else {
				console.log(decoded.ID, req.body.address)
				mysql.updateUser(decoded.ID, req.body.address, (result) => {
					console.log(result)
					res.json(result)
				})
			}
		})
	})

// 點數列表
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

// 點數
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
router.get('/friends', async function (req, res) {
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
	.get(async function (req, res) {

	})
	//新增好友
	.post(async function (req, res) {
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
	.delete(async function (req, res) {

	})

// 收支功能
router.route('/transaction')
	//收款
	.get(async function (req, res) {

	})
	//付款
	.post(async function (req, res) {
		console.log('payment')
		console.log(req.body)

		let decoded = jwt.verify(req.query.token, 'secret', function (err, decoded) {
			if (err) {
				console.error(err)
				res.status(400).send({ type: false, error: 'jwtInvalidError' })
			}
			else {
				web3.eth.sendSignedTransaction(req.body.sign_tx)
					.on('receipt', function (result) {
						console.log(result)
						console.log(decoded.ID, req.body.targetID, req.body.number, req.body.ercName, result.transactionHash)
						mysql.setTransaction(decoded.ID, req.body.targetID, req.body.number, req.body.ercName, result.transactionHash, () => {
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

// 查詢系統
router.get('/query/transactionsTo', async function (req, res) {
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
router.get('/query/transactionsFrom', async function (req, res) {
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

router.get('/query/transaction/:transactionID', async function (req, res) {

})

router.get('/nonce', function (req, res, next) {
	console.log('nonce')
	console.log(req.query)
	web3.eth.getTransactionCount(req.query.address).then(function (result) {
		console.log(result)
		res.send(result.toString())
	})
})

module.exports = router
