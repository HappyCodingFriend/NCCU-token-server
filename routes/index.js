const express = require('express')
const router = express.Router()

// sign with default (HMAC SHA256)
const jwt = require('jsonwebtoken')

const mysql = require('../library/mysql')

let jwtCheck = async function (req, res, next) {
	console.log('jwt check')

	if (true) next()
	else res.status(401).send({ error: 'jwtError' })
}

//帳號管理
router.route('/user')
	//登入
	.get(async function (req, res) {
		console.log('sign_in', req.query)
		let result = await sql.sing_in(req.query.userID, req.query.password)
		switch (result.type) {
			//登入成功
			case 0:
				let data = {
					ID: 'bar',
					name: 'bob',
				}
				let time = {
					expiresIn: '1h'
				}
				result.token = jwt.sign(data, 'secret', time)
				res.status(200).json(result)
				break
			//查無此帳號
			case 1:
				res.status(400).json(result)
				break
			//密碼錯誤
			case 2:
				res.status(400).json(result)
				break
			default:
				console.error('error')
		}
	})
	//註冊
	.post(async function (req, res) {
		console.log('sign_up', req.body)
		let result = await sql.sing_up(req.body.userID, req.body.password, req.body.email)
		res.json(result)
	})
	//更新
	.put(async function (req, res, next) {

	})
	//登出
	.delete(async function (req, res, next) {

	})

//好友管理
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

//收支功能
router.route('/transaction')
	//付款
	.get(async function (req, res) {

	})
	//收款
	.post(async function (req, res) {

	})

//查詢系統
router.get('query/balance', async function (req, res) {

})
router.get('query/transaction', async function (req, res) {

})
router.get('query/transaction/:transactionID', async function (req, res) {

})

module.exports = router
