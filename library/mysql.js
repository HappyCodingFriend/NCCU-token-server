const mysql = require('mysql')
const setting = require('./setting')
const credential = require('./credential')

const connection = mysql.createConnection({
	host: setting.mysql.host,
	user: credential.mysql.user,
	password: credential.mysql.password,
	database: setting.mysql.database,
})

function connect() {
	connection.connect((err) => {
		if (err) {
			console.log('error when connecting to db:', err)
			// 10秒後重新連線
			setTimeout(connect, 10000)
		}
		else {
			console.log('connecting to db')
		}
	})
}

async function sing_in(ID, password) {
	try {
		let user = await getUserByID(ID)

		if (!user) {
			return { type: 1, inf: '查無此帳號' }
		}
		else if (user.password != password) {
			return { type: 2, inf: '密碼錯誤' }
		}
		else if (user.password == password) {
			return { type: 0, inf: '登入成功', ID: user.ID, name: user.name }
		}
	} catch (err) {
		console.error(err)
	}
}

async function sing_up(ID, password, name, identity, email, phone, birthday, address, account) {
	try {
		let user = await getUserByID(ID)
		if (!user) {
			let result = await addUser(ID, password, name, identity, email, phone, birthday, address, account)
			return { type: true, inf: '註冊成功' }
		}
		else {
			return { type: false, inf: '此帳號已有人註冊過' }
		}
	} catch (err) {
		console.error(err)
	}
}

function getUserByID(ID) {
	let cmd = "SELECT * FROM user WHERE ID = ?";
	return new Promise(function (resolve, reject) {
		connection.query(cmd, [ID], (err, result) => {
			if (!err) {
				resolve(result[0])
			} else {
				reject(err)
			}
		})
	})
}

function addUser(ID, password, name, identity, email, phone, birthday, address, account, isHosted) {
	let cmd = "INSERT INTO user (ID, password, name, identity, email, phone, birthday, address, account) VALUES ?"
	let value = [
		[ID, password, name, identity, email, phone, birthday, address, account]
	];
	return new Promise(function (resolve, reject) {
		connection.query(cmd, [value], (err, result) => {
			if (!err) {
				resolve(result)
			} else {
				reject(err)
			}
		})
	})
}

function getAccountCount() {
	let cmd = "SELECT count(account) FROM user";
	connection.query(cmd, (err, result) => {
		if (!err) {
			return result
		}
		else {
			console.log(err)
		}
	})
}

function setVerification(ID, code) {
	let cmd = "UPDATE user SET verification = '" + code + "' WHERE ID = '" + ID + "' "
	connection.query(cmd)
}

function getVerification(ID, callback) {
	let cmd = "SELECT verification FROM user WHERE ID = ?"
	connection.query(cmd, [ID], (err, result) => {
		if (!err) {
			callback(result)
		} else {
			console.log(err)
		}
	})
}

module.exports = {
	connection,
	connect,

	sing_in,
	sing_up,

	getUserByID,

	setVerification,
	getVerification,
}