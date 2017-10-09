"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb = require("mongodb");
var env_1 = require("../ngApp/env/env");
var Database = (function () {
    function Database() {
    }
    Database.connect = function () {
        var _this = this;
        return mongodb.MongoClient.connect(env_1.default.dbConnection).then(function (db) {
            _this.db = db;
            console.log('Connected...');
        }).catch(function (err) {
            console.error(err);
        });
    };
    return Database;
}());
exports.default = Database;
