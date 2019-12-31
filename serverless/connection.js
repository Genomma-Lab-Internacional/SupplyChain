const mysql = require ("mysql")

const configDB = {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    port: process.env.port,
    database: process.env.database,
    debug: true
}

function initializeConnection(config) {
    function addDisconnectHandler(connection) {
        connection.on("err",err => {
            if(err instanceof Error) {
                if(err.code === "PROTOCOL_CONNECTION_LOST") {
                    console.log(err.stack)
                    console.log("LOST CONNECTION. RECONNECTING TO GENOMMA LAB DB...")
                    initializeConnection(connection.config)
                } else if (err.fatal) {
                    throw err
                }
            }
        })
    }
    const connection = mysql.createConnection(config)

    addDisconnectHandler(connection)

    connection.connect()
    return connection
}

const connection = initializeConnection(configDB)

module.exports = connection