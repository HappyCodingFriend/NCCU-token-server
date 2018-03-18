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

//user
async function sing_in(ID, password) {
	try {
		let user = await getUserByID(ID)

		if (!user) {
			return { type: false, inf: '查無此帳號', code: 200 }
		}
		else if (user.password != password) {
			return { type: false, inf: '密碼錯誤', code: 200 }
		}
		else if (user.password == password) {
			return { type: true, inf: '登入成功', code: 200, ID: user.ID, name: user.name, address: user.address }
		}
	} catch (err) {
		console.error(err)
	}
}

async function sing_up(ID, password, name, email, address) {
	try {
		let user = await getUserByID(ID)
		if (!user) {
			let result = await addUser(ID, password, name, email, address)
			console.log('sing up result', result)
			return { type: true, inf: '註冊成功' }
		}
		else {
			return { type: false, inf: '此帳號已有人註冊過' }
		}
	} catch (err) {
		console.error(err)
	}

	function addUser(ID, password, name, email, address) {
		let cmd = "INSERT INTO user (ID, password, name, email, address) VALUES ?"
		let value = [ID, password, name, email, address]

		return new Promise(function (resolve, reject) {
			connection.query(cmd, [[value]], (err, result) => {
				if (!err) {
					resolve(result)
				} else {
					reject(err)
				}
			})
		})
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

//friend
function setFriend() {

}

function getFriend() {

}

//Verification
function setVerification(ID, code) {

}

function getVerification(ID, callback) {

}

module.exports = {
	connection,
	connect,

	sing_in,
	sing_up,

	setFriend,
	getFriend,

	setVerification,
	getVerification,
}