'use strict';
const connection = require ("./connection")

module.exports.GetDataMasterInventario = (event,context,callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  const body = JSON.parse(event.body);
  console.log(body)
  console.log(event)
  const query = `SELECT COUNT(ID_${body.provider["provider"]} FROM MasterInventory`
  // connection.query(query,(error,rows) => {
  //   if(error) {
  //     callback({
  //       statusCode:500,
  //       body:JSON.stringify(error),
  //       headers:{
  //         "Access-Control-Allow-Origin":"*"
  //       }
  //     })
  //   } else {
  //     callback(null,{
  //       statusCode:200,
  //       body:JSON.stringify({ Master:rows }),
  //       headers:{
  //         "Access-Control-Allow-Origin":"*"
  //       }
  //     })
  //   }
  // })
}


module.exports.AddDataProvider = (event,context,callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  
  const body = JSON.parse(event.body);
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
      });
    } else {
      callback(null,{
        statusCode:200,
        body:JSON.stringify(body.table),
        headers:{
          "Access-Control-Allow-Origin":"*"
        }
      });
    }
  });
}



module.exports.GetDataProvider = (event,context,callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  
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
