const mongoose = require('mongoose')

const connect = () =>  new Promise((resolve, reject) => {
    mongoose.connect('mongodb://DevKevin:neokevin122@ds255403.mlab.com:55403/fondapi-test', {
      useNewUrlParser: true 
    })
    const db = mongoose.connection

    db.on('open', () => {
      console.warn('connection open')
      resolve(mongoose)
    })

    db.on('error', (error) => {
      console.error('NO SE PUDO CONECTAR: ', error)
      reject(error)
    })
  })

module.exports = { connect }