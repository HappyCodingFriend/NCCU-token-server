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

const point = new Map()
point.set('dormitory', '0x2CA6Dacbf2db0e04c8f7A73E27C385129A2b40cf')
point.set('academic', '0x5f16A398b338c6aeecD5bb2d4e851816d5b05a3d')
point.set('student', '0x64ea6D99636AEe83B15D35a9d7CB73E9ae8242Ae')

let jwtCheck = async function (req, res, next) {
	console.log('jwt check')

	console.log(req.body)
	let decoded = jwt.verify(req.body.token, 'secret', function (err, decoded) {
		if (err) {
			console.error(err)
			res.status(400).send({ error: 'jwtInvalidError' })
		}
		else {
			console.log(decoded)
			next()
		}
	})
}

// 帳號管理
router.route('/user')
	//登入
	.get(async function (req, res) {
		console.log('sign_in')
		console.log(req.query)

		if (!(req.query.ID && req.query.password)) {
			res.status(200).json({ type: false, inf: '資料缺失' })
		}
		else {
			let result = await mysql.sing_in(req.query.ID, req.query.password)
			if (result.type) {
				let data = {
					ID: result.ID,
					name: result.name,
					address: result.address,
				}
				let time = {
					expiresIn: '1h'
				}
				result.token = jwt.sign(data, 'secret', time)
			}
			console.log(result)
			res.status(result.code).json(result)
		}
	})
	//註冊
	.post(async function (req, res) {
		console.log('sign_up')
		console.log(req.body)

		if (!(req.body.ID && req.body.password && req.body.name && req.body.email)) {
			res.json({ type: false, inf: '資料缺失' })
		}
		else {
			let result = await mysql.sing_up(req.body.ID, req.body.password, req.body.name, req.body.email)
			res.json(result)
		}
	})
	//更新
	.put(jwtCheck, function (req, res, next) {
		console.log('sign_update')
		res.json({ '123': 123 })
	})
	//登出
	.delete(jwtCheck, function (req, res, next) {
		console.log('sign_out')
		res.json({ '123': 123 })
	})

// 好友管理
router.get('friend', async function (req, res) {

})
router.route('friend/:friendID')
	//取得好友
	.get(async function (req, res) {

	})
	//新增好友
	.post(async function (req, res) {

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

		web3.eth.sendSignedTransaction(req.body.sign_tx)
			.on('receipt', function (result) {
				console.log(result)
				res.send(result)
			})
			.on('error', function (err) {
				console.log(err)
				res.send(err)
			})
	})

// 查詢系統
router.get('/query/balance/:point', async function (req, res) {
	console.log('balance')

	ERC223TokenContract.options.address = point.get(req.params.point)
	ERC223TokenContract.methods.balanceOf(req.query.address).call().then(function (result) {
		res.send(result)
	})
})
router.get('/query/transaction', async function (req, res) {

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
