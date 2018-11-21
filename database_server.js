let db_servers1  = require('./db_servers/db_servers1.json');
let db_servers2  = require('./db_servers/db_servers2.json');
let db_servers3  = require('./db_servers/db_servers3.json');
let db_servers4  = require('./db_servers/db_servers4.json');

module.exports = function() {
  return {
    db_servers1 : db_servers1,
    db_servers2 : db_servers2,
    db_servers3 : db_servers3,
    db_servers4 : db_servers4
  }
}
