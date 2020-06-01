const AWS = require('aws-sdk'); 
const mysql = require ("mysql")
// const connection = require ("./connection")
AWS.config.update({region: 'us-east-1'})

module.exports.GetDataMasterInventario = (event,context,callback) => {
  context.callbackWaitsForEmptyEventLoop = false

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

  const body = JSON.parse(event.body);
  console.log(body)
  
  const query = `SELECT COUNT(ID_${body.provider["provider"]} FROM MasterInventory`
  connection.query(query,(error,rows) => {
    if(error) {
      callback({
        statusCode:500,
        body:JSON.stringify(error),
        headers:{
          "Access-Control-Allow-Origin":"*"
        }
      })
    } else {
      callback(null,{
        statusCode:200,
        body:JSON.stringify({ Master:rows }),
        headers:{
          "Access-Control-Allow-Origin":"*"
        }
      })
    }
  })
}

module.exports.AddDataProvider = (event,context,callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

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
  
  const body = JSON.parse(event.body);
  // let provider = body.provider
  let values=[]
  let insert = `INSERT INTO ${body.provider}Inventario (SKUA,descripcion,cantidad,provider) VALUES ?`;
  
  for (let i=1; i<body.table.length; i++) {
    values.push([body.table[i][0],body.table[i][1],body.table[i][2],body.provider])
  }

  connection.query(insert,[values],(error,rows) => {
    if(error) {
      callback({
        statusCode:500,
        body:JSON.stringify(error),
        headers:{
          "Access-Control-Allow-Origin":"*"
        }
      })
    } else {
      callback(null, {
        statusCode:200,
        body:JSON.stringify("DONE"),
        headers:{
          "Access-Control-Allow-Origin":"*"
        }
      })
    }
  })
}

module.exports.GetDataProvider = (event,context,callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  
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

  let provider = JSON.stringify(event.pathParameters)
  let providerEdited = JSON.parse(provider)
  
  const query = `SELECT * FROM ${providerEdited.provider}Inventario`
  
  connection.query(query,(error,rows) => {
    if(error) {
      callback({
        statusCode:500,
        body:JSON.stringify(error),
        headers:{
          "Access-Control-Allow-Origin":"*"
        }
      })
    } else {
      callback(null,{
        statusCode:200,
        body:JSON.stringify({ provider:rows }),
        headers:{
          "Access-Control-Allow-Origin":"*"
        }
      })
    }
  })
}

module.exports.AddDataMasterInventario = (event,context,callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
    
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

  const body = JSON.parse(event.body);
  console.log(body)
  
  let values=[]
  // let insert = `REPLACE INTO MasterInventario (SKUA,descripcion,cantidad,ID_${body.provider["provider"]}) VALUES ?`;

  let insert = `INSERT INTO MasterInventario (SKUA, descripcion, cantidad, ID_${body.provider["provider"]}) SELECT SKUA, descripcion, cantidad, ID_${body.provider["provider"]} FROM ${body.provider["provider"]}Inventario WHERE ID_${body.provider["provider"]}>${body.dataSize[0]};`
  console.log(insert)
  // for (let i=0; i<body.SKUA.length; i++) {
  //   values.push([
  //     body.SKUA[i],
  //     body.description[i],
  //     body.quantity[i],
  //     body.ID_provider[i]
  //   ])
  // }
  
  // connection.query(insert,[values],(error,rows) => {
  connection.query(insert,(error,rows) => {
    if(error) {
      callback({
        statusCode:500,
        body:JSON.stringify(error),
        headers:{
          "Access-Control-Allow-Origin":"*"
        }
      });
    } else {
      callback(null,{
        statusCode:200,
        body:JSON.stringify(values),
        headers:{
          "Access-Control-Allow-Origin":"*"
        }
      });
    }
  });
}

module.exports.ContactUs = (event, context, callback) => {
  let body = JSON.parse(event.body)
  console.log(body)

  let params = {
    Destination: { 
      CcAddresses: [],
      ToAddresses: [
        'carlos.ortiz@genommalab.com','daniela.lopez@genommalab.com',
      ]
    },
    Message: { 
      Body: {
        Html: {
        Charset: "UTF-8",
        Data: body.comments
        },
        Text: {
        Charset: "UTF-8",
        Data: body.comments
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Supply Chain Contact Us'
      }
      },
    Source: body.email,
    ReplyToAddresses: [
      body.email,
    ],
  }

  let sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

  sendPromise
    .then( data => {
      callback(null,{
        statusCode:200,
        body:JSON.stringify(data.MessageId),
        headers:{
          "Access-Control-Allow-Origin":"*"
        }
      });
    })
    .catch( err => {
      callback({
        statusCode:500,
        body:JSON.stringify(err),
        headers:{
          "Access-Control-Allow-Origin":"*"
        }
      })
    })
}

module.exports.AutoSendEmailProvider = (event, context, callback) => {
  const body = JSON.parse(event.body);
  
  let params = {
    Destination: { 
      CcAddresses: ["mario.lopez@genommalab.com","mario.cruz@genommalab.com","daniela.lopez@genommalab.com"],
      ToAddresses: ["carlos.ortiz@genommalab.com"]
    },
    Message: { 
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `El proveedor ${body.provider} ha subido su inventario a través de la WEBAPP`
        },
        Text: {
          Charset: "UTF-8",
          Data: `El proveedor ${body.provider} ha subido su inventario a través de la WEBAPP`
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `${body.provider}; Subió su inventario a la WEBAPP`
      }
    },
    Source: "mario.lopez@genommalab.com",
  }
  
  let sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise()
  
  sendPromise
    .then( _=> console.log("GOOD") )
    .catch( e => console.log("BAD",e) )
}




        // })
        // .catch( e =>{
        //   console.log("ERRORALCARGARYENVIARMAIL",e)
        //   callback({
        //     statusCode:500,
        //     body:JSON.stringify(error),
        //     headers:{
        //       "Access-Control-Allow-Origin":"*"
        //     }
        //   })
        // })


              // let params = {
      //   Destination: { 
      //     CcAddresses: ["mario.lopez@genommalab.com","mario.cruz@genommalab.com","daniela.lopez@genommalab.com"],
      //     ToAddresses: ["carlos.ortiz@genommalab.com"]
      //   },
      //   Message: { 
      //     Body: {
      //       Html: {
      //         Charset: "UTF-8",
      //         Data: `${body.provider} ya subio su inventario`
      //       },
      //       Text: {
      //         Charset: "UTF-8",
      //         Data: `${body.provider} ya subio su inventario`
      //       }
      //     },
      //     Subject: {
      //       Charset: 'UTF-8',
      //       Data: `**${body.provider}** Ya subio su inventario`
      //     }
      //   },
      //   Source: "mario.lopez@genommalab.com",
      // }
      // console.log(params)
      // let sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise()
      // sendPromise
      //   .then( ( ) => {

              // })
        // .catch( e =>{
        //   console.log("EXITOALCARGARPERONOALENVIAREMAIL",e)
        //   callback(null,{
        //     statusCode:200,
        //     body:JSON.stringify("DONE"),
        //     headers:{
        //       "Access-Control-Allow-Origin":"*"
        //     }
        //   }) 
        // })