const mysql = require('mysql')

class User {
    constructor() {
        this.connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'laboDB'
        })

        this.connection.connect()
    }

    async GetPhoneNumbers(personId) {
        const query = `SELECT * FROM PhoneNumber WHERE personId = ${personId}`
        return new Promise((resolve, reject) => {
            this.connection.query(query, (err, res) => {
                if(err) {
                    reject(err)
                }
                else{
                    resolve(res)
                }
            })
        })
    }

    async GetUsers() {
        const query = 'SELECT * FROM Person'
        return new Promise((resolve, reject) => {
            this.connection.query(query, (err, res) => {
                if(err) {
                    reject(err)
                }
                else{
                    resolve(res)
                }
            })
        })
    }

    async SaveUser(user) { 
        console.log(user)
        const query = `INSERT INTO Person(personName,gender,email,street,streetNumber,postalCode,lada,phoneNumber) VALUES ("${user['name']}","${user['gender']}","${user['email']}","${user['address'][0]['street']}","${user['address'][0]['streetNumber']}","${user['address'][0]['postalCode']}","${user['address'][0]['ladaNumber']}","${user['address'][0]['phoneNumber']}")`
        return new Promise((resolve, reject) => {
            this.connection.query(query, (err, res) => {
                if(err) {
                    reject(err)
                }
                else {
                    for(let i = 0; i <  Object.keys(user['phoneNumbers']).length; i++) {
                        const phoneQuery = `INSERT INTO PhoneNumber(personId, lada, phoneNumber) VALUES (${res['insertId']}, "${user['phoneNumbers'][i]['lada']}", "${user['phoneNumbers'][i]['phoneNumber']}")`
                        this.connection.query(phoneQuery, (err, res) => {
                            if(err) {
                                reject(err)
                            }
                        })
                    }
                    resolve(res)
                }
            })
        })
    }
}

module.exports = User