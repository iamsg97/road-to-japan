class Todo {
	constructor(selector) {
		this.list = document.querySelector(selector);
		this.createListeners();
	}

	createListeners() {
		this.list.addEventListener("click", (event) => {
			// EDIT TODO
			if (event.target.classList.contains("edit")) {
				event.stopPropagation();
				this.editTodo(event.target);
			}
			// DELETE TODO
			if (event.target.classList.contains("delete")) {
				event.stopPropagation();
				this.deleteTodo(event.target);
			}
			// TOGGLE TODO
			if (event.target.classList.contains("todo-item")) {
				event.target.classList.toggle("completed");
			}
		});
	}

	editTodo(editElement) {
		const todo = editElement.closest("todo");
		const text = todo.closest("text");
		// TODO: edit logic
	}
}
