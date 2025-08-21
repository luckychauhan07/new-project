const mongo = require('mongodb')

const URI =
    "mongodb+srv://chauhan12lucky:lucky%40123@luckychauhan.kmadz3u.mongodb.net/?retryWrites=true&w=majority&appName=luckychauhan";
  
let _db;
const mongoClient = mongo.MongoClient;

exports.mongoConnect = (callback) => {
	mongoClient
		.connect(URI)
		.then((client) => {
			_db = client.db("taskManager");
			callback();
		})
		.catch((err) => {
			console.log("error while connecting to mongodb", err);
		});
}
const getDb = () => {
    if (!_db) {
        throw new Error("mongo not connected successfully")
    }   
    else {
        return _db
    }
}
exports.getDb = getDb;
