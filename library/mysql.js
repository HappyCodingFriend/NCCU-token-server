const mysql = require('mysql')

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
			callback({ type: true, inf: '登入成功', ID: user.ID, name: user.name, email: user.email, address: user.address })
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

function getUser(ID, callback) {
	let cmd = "SELECT ID, name, address FROM user WHERE ID = ?";
	connection.query(cmd, [ID], (err, result) => {
		if (err) {
			console.error(err)
		} else {
			if (!result[0])
				callback({ type: false, inf: '查無此使用者' })
			else {
				callback({ type: true, inf: result[0] })

			}
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
	getUserByID(friendID, (user) => {
		if (!user) {
			callback({ type: false, inf: '查無此帳號' })
		}
		else {
			let cmd = "INSERT INTO friend (ID, friendID) VALUES ?"
			let value = [ID, friendID]
			connection.query(cmd, [[value]], (err, result) => {
				if (err) {
					console.error(err)
				} else {
					callback({ type: true, inf: '新增成功' })
				}
			})
		}
	})
}

function deleteFriend(ID, friendID, callback) {
	getUserByID(friendID, (user) => {
		if (!user) {
			callback({ type: false, inf: '查無此帳號' })
		}
		else {
			let cmd = "DELETE FROM friend WHERE ID = ? AND friendID = ?"
			let value = [[ID], [friendID]]
			connection.query(cmd, [value], (err, result) => {
				if (err) {
					console.error(err)
				} else {
					callback({ type: true, inf: '新增成功' })
				}
			})
		}
	})
}

function getFriend() {

}

//Verification
function gatTransactionsTo(ID, callback) {
	let cmd = `
		SELECT transaction.* , user.name , target.name as targetName
		FROM transaction 
		left JOIN user ON transaction.ID = user.ID
		left JOIN user as target ON transaction.targetID = target.ID 
		WHERE transaction.ID = ?;
	`
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
	let cmd = `
		SELECT transaction.* , user.name , target.name as targetName
		FROM transaction 
		left JOIN user ON transaction.ID = user.ID
		left JOIN user as target ON transaction.targetID = target.ID 
		WHERE transaction.targetID = ?;
	`
	connection.query(cmd, [ID], (err, result) => {
		if (err) {
			console.error(err)
			callback(err)
		}
		else {
			callback(result)
		}
	})
}

function gatTransaction(ID, txHash, callback) {

}

function setTransaction(ID, targetID, number, point, txHash, callback) {
	let cmd = "INSERT INTO transaction (ID, targetID, number, point, txHash) VALUES ?"
	let value = [ID, targetID, number, point, txHash]
	connection.query(cmd, [[value]], (err, result) => {
		if (err) {
			console.error(err)
			callback(err)
		} else {
			callback(result)
		}
	})
}

function getOrders(callback) {
	let cmd = `
		SELECT nccu_token.order.*, user.name as ownerName
		FROM nccu_token.order 
		left JOIN user ON nccu_token.order.owner = user.ID
		WHERE buyer IS NULL
	`
	connection.query(cmd, (err, result) => {
		if (err) {
			console.error(err)
			callback(err)
		} else {
			callback(result)
		}
	})
}

function getOrderTo(ID, callback) {
	let cmd = `
		SELECT nccu_token.order.*, user1.name as ownerName, user2.name as buyerName 
		FROM nccu_token.order
		left JOIN user as user1 ON nccu_token.order.owner = user1.ID
		left JOIN user as user2 ON nccu_token.order.buyer = user2.ID
		WHERE owner = ?;
	`
	connection.query(cmd, [ID], (err, result) => {
		if (err) {
			console.error(err)
			callback(err)
		} else {
			callback(result)
		}
	})
}

function getOrderFrom(ID, callback) {
	let cmd = `
		SELECT nccu_token.order.*, user1.name as ownerName, user2.name as buyerName 
		FROM nccu_token.order
		left JOIN user as user1 ON nccu_token.order.owner = user1.ID
		left JOIN user as user2 ON nccu_token.order.buyer = user2.ID
		WHERE buyer = ?
	`
	connection.query(cmd, [ID], (err, result) => {
		if (err) {
			console.error(err)
			callback(err)
		} else {
			callback(result)
		}
	})
}

function addOrder(address, owner, point1, value1, point2, value2, callback) {
	let cmd = "INSERT INTO nccu_token.order (address, owner, point1, value1, point2, value2) VALUES ?"
	let value = [address, owner, point1, value1, point2, value2]
	connection.query(cmd, [[value]], (err, result) => {
		if (err) {
			callback(err)
		} else {
			callback(result)
		}
	})
}

function updateOrder(autoID, buyer, callback) {
	let cmd = "UPDATE nccu_token.order SET buyer = ? WHERE autoID = ?";
	connection.query(cmd, [[buyer], [autoID]], (err, result) => {
		if (err) {
			callback(err)
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

	getUser,
	updateUser,

	getPoints,

	getFriends,
	addFriend,
	deleteFriend,
	getFriend,

	gatTransactionsTo,
	gatTransactionsFrom,
	gatTransaction,
	setTransaction,

	getOrders,
	getOrderTo,
	getOrderFrom,
	addOrder,
	updateOrder,
}