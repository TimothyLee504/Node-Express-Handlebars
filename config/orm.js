var connection = require("../config/connections");


var burger = {
    all: function (table, cb) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
            // perhaps well use res.json(results)?
        });
    },
    create: function (burger, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burger], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    update: function (burger_id, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE (id = "+burger_id+");";
        connection.query(queryString, function(err, res){
            console.log("working in orm");
            if (err) throw err;
            cb(res);
        });

    }
};

module.exports = burger;