const mysql = require('mysql')
const setting = require('./setting')

const connection = mysql.createConnection({
	host: process.env.SQL_HOST,
	user: process.env.SQL_USER,
	password: process.env.SQL_PASSWORD,
	database: process.env.SQL_DATABASE,
})

function connect() {
	connection.connect((err) => {
		if (err) {
			console.error('error when connecting to db:', err)
			// 10秒後重新連線
			setTimeout(connect, 10000)
		}
		else {
			console.log('connecting to db')
		}
	})
}

//user
function sing_in(ID, password, callback) {
	getUserByID(ID, (user) => {
		if (!user) {
			callback({ type: false, inf: '查無此帳號' })
		}
		else if (user.password != password) {
			callback({ type: false, inf: '密碼錯誤' })
		}
		else if (user.password == password) {
			callback({ type: true, inf: '登入成功', ID: user.ID, name: user.name, address: user.address })
		}
	})
}

function sing_up(ID, password, name, email, address, callback) {
	getUserByID(ID, (user) => {
		getUserByID(ID, (user) => {
			if (!user) {
				addUser(ID, password, name, email, address, (result) => {
					console.log('sing up result', result)
					callback({ type: true, inf: '註冊成功' })
				})
			}
			else {
				callback({ type: false, inf: '此帳號已有人註冊過' })
			}
		})
	})
	function addUser(ID, password, name, email, address, callback) {
		let cmd = "INSERT INTO user (ID, password, name, email, address) VALUES ?"
		let value = [ID, password, name, email, address]
		connection.query(cmd, [[value]], (err, result) => {
			if (err) {
				console.error(err)
			} else {
				callback(result)
			}
		})
	}
}

function updateUser(ID, address, callback) {
	let cmd = "UPDATE user SET address = ? WHERE ID = ?";
	connection.query(cmd, [[address], [ID]], (err, result) => {
		if (err) {
			console.error(err)
		} else {
			callback(result)
		}
	})
}

function getUserByID(ID, callback) {
	let cmd = "SELECT * FROM user WHERE ID = ?";
	connection.query(cmd, [ID], (err, result) => {
		if (err) {
			console.error(err)
		} else {
			callback(result[0])
		}
	})
}

//point
function getPoints(callback) {
	let cmd = 'SELECT * FROM point'
	connection.query(cmd, (err, result) => {
		if (err) {
			console.error(err)
		}
		else {
			callback(result)
		}
	})
}

//friend
function getFriends(ID, callback) {
	let cmd = 'SELECT friend.ID, friend.friendID, user.name, user.email, user.address FROM friend left JOIN user ON friend.friendID = user.ID WHERE friend.ID = ?;'
	connection.query(cmd, [ID], (err, result) => {
		if (err) {
			console.error(err)
		}
		else {
			callback(result)
		}
	})
}

function addFriend(ID, friendID, callback) {
	let cmd = "INSERT INTO friend (ID, friendID) VALUES ?"
	let value = [ID, friendID]
	connection.query(cmd, [[value]], (err, result) => {
		if (err) {
			console.error(err)
		} else {
			callback(result)
		}
	})
}

function getFriend() {

}

//Verification
function gatTransactionsTo(ID, callback) {
	let cmd = 'SELECT * FROM transaction WHERE ID = ?;'
	connection.query(cmd, [ID], (err, result) => {
		if (err) {
			console.error(err)
		}
		else {
			callback(result)
		}
	})
}

function gatTransactionsFrom(ID, callback) {
	let cmd = 'SELECT * FROM transaction WHERE targetID = ?;'
	connection.query(cmd, [ID], (err, result) => {
		if (err) {
			console.error(err)
		}
		else {
			callback(result)
		}
	})
}

function gatTransaction(ID, txHash, callback) {

}

function setTransaction(ID, targetID, number, ercName, txHash, callback) {
	let cmd = "INSERT INTO transaction (ID, targetID, number, ercName, txHash) VALUES ?"
	let value = [ID, targetID, number, ercName, txHash]
	connection.query(cmd, [[value]], (err, result) => {
		if (err) {
			console.error(err)
		} else {
			callback(result)
		}
	})
}

module.exports = {
	connection,
	connect,

	sing_in,
	sing_up,
	updateUser,

	getPoints,

	getFriends,
	addFriend,
	getFriend,

	gatTransactionsTo,
	gatTransactionsFrom,
	gatTransaction,
	setTransaction,
}