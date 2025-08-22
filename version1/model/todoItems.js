const { getDb } = require("../util/datbaseUtil");
const { ObjectId } = require("mongodb");

module.exports = class TodoItem {
	constructor(taskTitle, taskDescription, taskDate, taskAssignedId, status) {
		this.taskTitle = taskTitle;
		this.taskDescription = taskDescription;
		this.taskDate = taskDate;
		this.taskAssignedId = taskAssignedId;
		this.status = status;
	}
	save() {
		const db = getDb();
		return db.collection("sample1").insertOne(this);
	}
	static fetchAll() {
		const db = getDb();
		return db.collection("sample1").find().toArray();
	}
	static findTodoItemByItem(todoId) {
		const db = getDb();
		return db.collection("sample1").findOne({ _id: new ObjectId(todoId) });
	}
	static deleteTodoItemById(todoId) {
		const db = getDb();
		return db.collection("sample1").deleteOne({
			_id: new ObjectId(todoId),
		});
	}
	static findByStatus(status) {
		const db = getDb();
		return db.collection('sample1').find({status:status}).toArray()
	}
};
