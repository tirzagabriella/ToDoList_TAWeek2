from fastapi import FastAPI, Path
from typing import Optional
from pydantic import BaseModel

app = FastAPI()

todos = {}

class Todo(BaseModel):
    id: Optional[int] = None
    title: Optional[str] = None
    completed: Optional[bool] = None


@app.get("/")
def index():
    return {"message": "Welcome to a todolist example of FastAPI!"}

# Get all todos
@app.get("/todos/all")
def get_all_todos():
    return list(todos.values())

# Path parameter (decorator parameter + function parameter)
@app.get("/todos/{todos_id}")
def get_todos_by_id(
    todos_id: int = Path(..., description="The ID of the list you want to view.", gt=0)
):
    if todos_id not in todos:
        return {"Error": f"Student ID {todos_id} doesn't exist."}
    return todos[todos_id]


# Query parameters (solely function parameters)
@app.get("/todos-by-title")
def get_todos_by_title(title: str):
    for id in todos:
        if todos[id].title == title:
            return todos[id]
    return {"Error": f"Task title '{title}' not found."}

# Post todos (create new todos object in list)
@app.post("/todos/post/{todos_id}")
def create_todos(todos_id: int, task: Todo):
    if todos_id in todos:
        return {"Error": "Task exists."}
    todos[todos_id] = task
    return todos[todos_id]


# Update todos
@app.put("/todos/put/{todos_id}")
def update_todos(todos_id: int, task: Todo):
    if todos_id not in todos:
        return {"Error": f"ID {todos_id} does not exist."}

    if task.title != None:
        todos[todos_id].title = task.title
    if task.completed != None:  
        todos[todos_id].completed = task.completed

    return todos[todos_id]


# Delete todos by id
@app.delete("/todos/delete/{todos_id}")
def delete_todos(todos_id: int):
    if todos_id not in todos:
        return {"Error": f"ID {todos_id} does not exist."}
    del todos[todos_id]
    return {"Message": "Task deleted successfully."}

# Delete todos by title
@app.delete("/todos/delete_by_title")
def delete_todo_by_title(title: str):
    for todos_id, todo in list(todos.items()):  # Convert to list to avoid RuntimeError due to dictionary size change during iteration
        if todo.title == title:
            del todos[todos_id]
            return {"Message": f"Todo with title '{title}' deleted successfully."}
    return {"Error": f"No todo with title '{title}' found."}

# Delete all
@app.delete("/todos/delete_all")
def delete_all_todos():
    todos.clear()  # This will remove all items from the dictionary
    return {"Message": "All todos deleted successfully."}