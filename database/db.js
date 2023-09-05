//module for mssql
var sql = require("mssql");

// config for your database
var config = {	
    user: 'home',	
    password: '123456',	
    server: 'localhost', 	
    database: 'SportLeague',	
    options: {	
        encrypt: false,	
        cryptoCredentialsDetails: {	
            minVersion: 'TLSv1'                                     	
        }	
    }  	
};    	

// // connect to your database
// sql.connect(config, function (err) {
//     if (err) console.log(err);   
//     else console.log('connected to SQL server')
// });

// // object sql can require from other file js
// module.exports = {	
//     sql	
// }

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}
