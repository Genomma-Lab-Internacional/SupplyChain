const AWS = require('aws-sdk'); 
const mysql = require ("mysql")
const weekNumber = require("current-week-number")
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
  let noProvider = ""
  let values=[]

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
  console.log(event)
  console.log(body.provider)

  switch(body.provider) {
    case "AAACosmetica":
      noProvider = "70000003"
      break;
    case "Absara":
      noProvider = "70000004"
      break;
    case "Albek":
      noProvider = "70000010"
      break;
    case "AstraZeneca":
      noProvider = "Indefinido"
      break;
    case "Beautyge":
      noProvider = "70000050"
      break;
    case "Biulab":
      noProvider = "70002261"
      break;
    case "Botanicals":
      noProvider = "70000314"
      break;
    case "CandG":
      noProvider = "70000025"
      break;
    case "CenturyLab":
      noProvider = "70000044"
      break;
    case "ClaraActitudMexicana":
      noProvider = "70000026"
      break;
    case "ColorLink":
      noProvider = "70004461"
      break;
    case "Comdruso":
      noProvider = "70000052"
      break;
    case "CosmeticColors":
      noProvider = "70000034"
      break;
    case "EstiloYVanidad":
      noProvider = "70000093"
      break;
    case "Everest":
      noProvider = "70000076"
      break;
    case "Farmapiel":
      noProvider = "Indefinido"
      break;
    case "Francobel":
      noProvider = "70000102"
      break;
    case "Gelpharma":
      noProvider = "70000117"
      break;
    case "Giaccar":
      noProvider = "70000126"
      break;
    case "GrupoRostenberg":
      noProvider = "70000130"
      break;
    case "Indelpa":
      noProvider = "Indefinido"
      break;
    case "IndusOleofinos":
      noProvider = "Indefinido"
      break;
    case "IndustriasQuimicasIndependencia":
      noProvider = "70002212"
      break;
    case "LabColumbiaComercial":
      noProvider = "Indefinido"
      break;
    case "LabDermatologicoPrada":
      noProvider = "70000162"
      break;
    case "LabManuell":
      noProvider = "70000168"
      break;
    case "LabRussek":
      noProvider = "70002323"
      break;
    case "LabValdecasas":
      noProvider = "70000173"
      break;
    case "LabZell":
      noProvider = "70000174"
      break;
    case "Liferpal":
      noProvider = "70000169"
      break;
    case "LQFLaboratorioQuimico":
      noProvider = "Indefinido"
      break;
    case "MediaEmpaques":
      noProvider = "70000179"
      break;
    case "NovagInfancia":
      noProvider = "Indefinido"
      break;
    case "Olnatura":
      noProvider = "70000193"
      break;
    case "PersonnaInternational":
      noProvider = "Indefinido"
      break;
    case "PharmacosExacta":
      noProvider = "70000285"
      break;
    case "Profilatex":
      noProvider = "70000209"
      break;
    case "Progela":
      noProvider = "70000207"
      break;
    case "QuimicaYFarmacia":
      noProvider = "70000212"
      break;
    case "RecicladoraDePlasticos":
      noProvider = "70003906"
      break;
    case "Renopac":
      noProvider = "70004078"
      break;
    case "RotoPack":
      noProvider = "70000219"
      break;
    case "SarintMaquilas":
      noProvider = "70000236"
      break;
    case "Saroma":
      noProvider = "70000222"
      break;
    case "Selder":
      noProvider = "70000226"
      break;
    case "Serral":
      noProvider = "Indefinido"
      break;
    case "Servical":
      noProvider = "70000240"
      break;
    case "ServciosAdministrativosUrbanus":
      noProvider = "70003122"
      break;
    case "SIE":
      noProvider = "70000231"
      break;
    case "SinergiaFarmaceutica":
      noProvider = "70000228"
      break;
    case "Tecnosol":
      noProvider = "70000248"
      break;
    case "UltraLaboratorios":
      noProvider = "70000252"
      break;
    case "Test":
      noProvider = "YEAH BABY"
      break;
    default:
      noProvider = "sin PROVEEDOR"
      break
  }
  console.log("noprovider")
  console.log(body.provider,noProvider)


  let insert = `INSERT INTO ${body.provider}Inventario (SKUA,descripcion,cantidad,provider,lote,semana,propietario,Noprovider) VALUES ?`;
  
  for (let i=1; i<body.table.length; i++) {
    values.push([body.table[i][0],body.table[i][1],body.table[i][2],body.provider,body.table[i][3] ? body.table[i][3] :"0",weekNumber(),body.table[i][4] ? body.table[i][4] :"Sin Definir",noProvider])
  }

  connection.query(insert,[values],(error,rows) => {
    if(error) {
      console.log(error)
      callback({
        statusCode:500,
        body:JSON.stringify(error),
        headers:{
          "Access-Control-Allow-Origin":"*"
        }
      })
    } else {
      console.log(rows)
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