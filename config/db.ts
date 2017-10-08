import * as mongodb from 'mongodb';
import env from '../ngApp/env/env';

export default class Database {
    public static db:mongodb.Db;
    public static connect() {
        return mongodb.MongoClient.connect(env.dbConnection).then((db) => {
            this.db = db;
            console.log('Connected...');
        }).catch((err) => {
            console.error(err);
        });
    }
}