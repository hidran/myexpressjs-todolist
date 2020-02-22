const fs = require('fs');

module.exports = {
    development: {
        username: 'root',
        password: 'hidran',
        database: 'sequelizetodolist',
        host: '127.0.0.1',
        dialect: 'mysql'
    },
    test: {
        username: 'database_test',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql'
    },
    //mysql://g4bjs37vnkotbycq:f5b2lwihjk8wu0qy@if0ck476y7axojpg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/lt2dvo91p61qblkr
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
            }
        }
    }
};
