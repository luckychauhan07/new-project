const { getDb } = require("../util/datbaseUtil");
const { ObjectId } = require("mongodb");

module.exports = class TodoItem {
	constructor(
		taskTitle,
		taskDescription,
		taskDate,
		taskAssignedId,
		status,
		_id
	) {
		this.taskTitle = taskTitle;
		this.taskDescription = taskDescription;
		this.taskDate = taskDate;
		this.taskAssignedId = taskAssignedId;
		this.status = status;
		this._id = _id;
	}
	save() {
		const db = getDb();
		if (this._id) {
			console.log("task edit section");
			return db.collection("sample1").updateOne(
				{ _id: new ObjectId(this._id) },
				{
					$set: {
						taskTitle: this.taskTitle,
						taskDescription: this.taskDescription,
						taskDate: this.taskDate,
						taskAssignedId: this.taskAssignedId,
						status: this.status,
					},
				}
			);
		} else {
			console.log("new task register section");
			return db.collection("sample1").insertOne(this);
		}
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
		return db.collection("sample1").find({ status: status }).toArray();
	}
	static changeStatusById(status, taskId) {
		const db = getDb()
		return db.collection('sample1').updateOne({ _id: new ObjectId(taskId) }, {
			$set: {
				status:"completed"
			}
		})
	}
};
