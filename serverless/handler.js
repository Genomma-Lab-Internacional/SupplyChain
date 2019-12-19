'use strict';
const connection = require ("./connection")

module.exports.GetAllDataTransactions = (event,context,callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  const query = "SELECT * FROM MasterInventory"
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
        body:JSON.stringify({ Transactions:rows }),
        headers:{
          "Access-Control-Allow-Origin":"*"
        }
      })
    }
  })
}


  module.exports.AddDataProvider = (event,context,callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    
    const body = JSON.parse(event.body);
    let values=[]
    let insert = `INSERT INTO ${body.provider}Inventario (SKUAGenomma,Descripcion,Cantidad) VALUES ?`;
    
    for (let i=1; i<body.table.length; i++) {
      values.push([body.table[i][0],body.table[i][1],body.table[i][2]])
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

module.exports.AddDataMaster = (event,context,callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
    
  const body = JSON.parse(event.body);
  let values=[]
  let insert = `INSERT INTO MasterInventario (SKUAGenomma,Descripcion,Cantidad) VALUES ?`;
  
  for (let i=1; i<body.table.length; i++) {
    values.push([body.table[i][0],body.table[i][1],body.table[i][2]])
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
